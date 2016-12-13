package sk.eea.geo4jira;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.util.Log;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class GeoForm extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener, LocationListener {

    private static final int MY_PERMISSIONS_REQUEST_READ_LOCATION = 0;
    private final long LOCATION_REFRESH_TIME = 1000;
    private final float LOCATION_REFRESH_DISTANCE = 1000;
    private Location location = null;

    class RetrieveFeedTask extends AsyncTask<String, Void, Void> {

        private Exception exception;

        protected Void doInBackground(String... params) {
            try {
                String result = post(params[0], location, params[1], params[2], params[3], params[4], params[5], params[6], params[7]);
                Log.d("asd", result);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }

        protected void onPostExecute(Void v) {
        }
    }

    public static boolean checkPermission(final Context context) {
        return ActivityCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
                && ActivityCompat.checkSelfPermission(context, Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED;
    }

    /*public String prepareJSON(Location loc, String name, String surname, String email, String summary, String description, String telephone, String address) {

        String geojson = "{\n" +
                "        \"type\": \"FeatureCollection\",\n" +
                "        \"features\": [{\n" +
                "            \"type\": \"Feature\",\n" +
                "            \"properties\": {},\n" +
                "            \"geometry\": {\n" +
                "                \"type\": \"Point\",\n" +
                "                \"coordinates\": [" + loc.getLongitude() + ", " + loc.getLatitude() + "]\n" +
                "            }\n" +
                "        }]\n" +
                "    }";

        String json = "\"{\n" +
                "        'summary': '" + summary + "'\n" +
                "        'description': '" + description + "',\n" +
                "        'email': '" + email + "',\n" +
                "        'name': '" + name + "',\n" +
                "        'surname': '" + surname + "',\n" +
                "        'address': '" + address + "',\n" +
                "        'phone': '" + telephone + "',\n" +
                "        'geojson': " + geojson + ",\n" +
                "    }\"";


        return geojson;
    }*/

    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");

    OkHttpClient client = new OkHttpClient();

    String post(String url, Location loc, String name, String surname, String email, String summary, String description, String telephone, String address) throws IOException {

        String geojson = "{\n" +
                "        \"type\": \"FeatureCollection\",\n" +
                "        \"features\": [{\n" +
                "            \"type\": \"Feature\",\n" +
                "            \"properties\": {},\n" +
                "            \"geometry\": {\n" +
                "                \"type\": \"Point\",\n" +
                "                \"coordinates\": [" + loc.getLongitude() + ", " + loc.getLatitude() + "]\n" +
                "            }\n" +
                "        }]\n" +
                "    }";

        RequestBody body = new FormBody.Builder()
                .add("summary", summary)
                .add("description", description)
                .add("email", email)
                .add("name", name)
                .add("surname", surname)
                .add("address", address)
                .add("phone", telephone)
                .add("geojson", geojson)
                .build();

        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        Response response = client.newCall(request).execute();
        return response.body().string();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LocationManager mLocationManager = (LocationManager) getSystemService(LOCATION_SERVICE);

        if (!checkPermission(this)) {
            ActivityCompat.requestPermissions(
                    this,
                    new String[]{Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION},
                    MY_PERMISSIONS_REQUEST_READ_LOCATION);
        }

        if (checkPermission(this)) {
            mLocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, LOCATION_REFRESH_TIME,
                    LOCATION_REFRESH_DISTANCE, this);
        } else {
            Snackbar.make(findViewById(android.R.id.content), "No GPS data", Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show();
        }


        setContentView(R.layout.activity_geo_form);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                SharedPreferences sharedPref = GeoForm.this.getSharedPreferences("prefs", Context.MODE_PRIVATE);

                String name = sharedPref.getString(getString(R.string.pref_name), "");
                String surname = sharedPref.getString(getString(R.string.pref_surname), "");
                String email = sharedPref.getString(getString(R.string.pref_email), "");
                String address = sharedPref.getString(getString(R.string.pref_address), "");
                String phone = sharedPref.getString(getString(R.string.pref_phone), "");

                EditText summaryedittext = (EditText) findViewById(R.id.geo_form_summary);
                EditText descriptionedittext = (EditText) findViewById(R.id.geo_form_description);

                if (location == null) {
                    Snackbar.make(view, "No location yet", Snackbar.LENGTH_LONG)
                            .setAction("Action", null).show();
                    return;
                }

                new RetrieveFeedTask().execute(getString(R.string.jira_url) + getString(R.string.jira_issue_collector), name, surname, email, summaryedittext.getText().toString(), descriptionedittext.getText().toString(), address, phone);
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.geo_form, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_manage) {
            SharedPreferences sharedPref = this.getSharedPreferences("prefs", Context.MODE_PRIVATE);

            SharedPreferences.Editor editor = sharedPref.edit();
            editor.putString(getString(R.string.pref_dirty), "");
            editor.apply();

            Intent intent = new Intent(GeoForm.this, UserCredentialPage.class);
            startActivity(intent);
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public void onLocationChanged(Location location) {
        this.location = location;
    }

    @Override
    public void onStatusChanged(String s, int i, Bundle bundle) {

    }

    @Override
    public void onProviderEnabled(String s) {

    }

    @Override
    public void onProviderDisabled(String s) {

    }
}
