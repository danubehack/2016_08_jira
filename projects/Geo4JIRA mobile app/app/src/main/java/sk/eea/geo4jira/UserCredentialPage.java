package sk.eea.geo4jira;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class UserCredentialPage extends AppCompatActivity {

    private boolean isNameOkay = false;
    private boolean isSurnameOkay = false;
    private boolean isEmailOkay = false;
    private boolean isAddressOkay = false;
    private boolean isPhoneOkay = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        SharedPreferences sharedPref = this.getSharedPreferences("prefs", Context.MODE_PRIVATE);

        String namestr = sharedPref.getString(getString(R.string.pref_name), "");
        String surnamestr = sharedPref.getString(getString(R.string.pref_surname), "");
        String emailstr = sharedPref.getString(getString(R.string.pref_email), "");
        String addressstr = sharedPref.getString(getString(R.string.pref_address), "");
        String phonestr = sharedPref.getString(getString(R.string.pref_phone), "");
        String dirty = sharedPref.getString(getString(R.string.pref_dirty), "");

        if(!dirty.isEmpty())
        {
            Intent intent = new Intent(UserCredentialPage.this, GeoForm.class);
            startActivity(intent);
        }


        setContentView(R.layout.activity_user_credential_page);

        Button gotoAppButn = (Button) findViewById(R.id.user_credential_gotoapp_butn);

        final TextView name = (TextView) findViewById(R.id.user_credential_name);
        final TextView surname = (TextView) findViewById(R.id.user_credential_surname);
        final TextView email = (TextView) findViewById(R.id.user_credential_email);
        final TextView address = (TextView) findViewById(R.id.user_credential_address);
        final TextView phone = (TextView) findViewById(R.id.user_credential_phone);

        name.setText(namestr);
        surname.setText(surnamestr);
        email.setText(emailstr);
        address.setText(addressstr);
        phone.setText(phonestr);

        name.addTextChangedListener(new InputValidator(name) {
            @Override
            public void validate(TextView textView, String text) {
                if (text.isEmpty()) {
                    textView.setError(getString(R.string.error_input_is_empty));
                    isNameOkay = false;
                    return;
                }
                isNameOkay = true;
            }
        });

        surname.addTextChangedListener(new InputValidator(surname) {
            @Override
            public void validate(TextView textView, String text) {
                if (text.isEmpty()) {
                    textView.setError(getString(R.string.error_input_is_empty));
                    isSurnameOkay = false;
                    return;
                }
                isSurnameOkay = true;
            }
        });

        email.addTextChangedListener(new InputValidator(email) {
            @Override
            public void validate(TextView textView, String text) {
                if (text.isEmpty()) {
                    textView.setError(getString(R.string.error_input_is_empty));
                    isEmailOkay = false;
                    return;
                } else if (!Patterns.EMAIL_ADDRESS.matcher(text).matches()) {
                    textView.setError(getString(R.string.error_malformed_email));
                    isEmailOkay = false;
                    return;
                }
                isEmailOkay = true;
            }
        });

        address.addTextChangedListener(new InputValidator(address) {
            @Override
            public void validate(TextView textView, String text) {
                if (text.isEmpty()) {
                    textView.setError(getString(R.string.error_input_is_empty));
                    isAddressOkay = false;
                    return;
                }
                isAddressOkay = true;
            }
        });

        phone.addTextChangedListener(new InputValidator(phone) {
            @Override
            public void validate(TextView textView, String text) {
                if (text.isEmpty()) {
                    textView.setError(getString(R.string.error_input_is_empty));
                    isPhoneOkay = false;
                    return;
                } else if (!Patterns.PHONE.matcher(text).matches()) {
                    textView.setError(getString(R.string.error_malformed_phone));
                    isPhoneOkay = false;
                    return;
                }
                isPhoneOkay = true;
            }
        });

        gotoAppButn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //if name, surname and email is okay, let the user in
                if (isNameOkay && isSurnameOkay && isEmailOkay) {

                    SharedPreferences sharedPref =UserCredentialPage.this.getSharedPreferences("prefs", Context.MODE_PRIVATE);
                    SharedPreferences.Editor editor = sharedPref.edit();
                    editor.putString(getString(R.string.pref_name), name.getText().toString());
                    editor.putString(getString(R.string.pref_surname), surname.getText().toString());
                    editor.putString(getString(R.string.pref_address), address.getText().toString());
                    editor.putString(getString(R.string.pref_email), email.getText().toString());
                    editor.putString(getString(R.string.pref_phone), phone.getText().toString());
                    editor.putString(getString(R.string.pref_dirty), "dirty");
                    editor.apply();



                    Intent intent = new Intent(UserCredentialPage.this, GeoForm.class);
                    startActivity(intent);
                } else {
                    if (name.getText().toString().isEmpty() || surname.getText().toString().isEmpty() || email.getText().toString().isEmpty()) {

                        Toast.makeText(UserCredentialPage.this, getString(R.string.error_incomplete_user_data), Toast.LENGTH_LONG).show();
                    }
                    else {
                        SharedPreferences sharedPref =UserCredentialPage.this.getSharedPreferences("prefs", Context.MODE_PRIVATE);
                        SharedPreferences.Editor editor = sharedPref.edit();
                        editor.putString(getString(R.string.pref_name), name.getText().toString());
                        editor.putString(getString(R.string.pref_surname), surname.getText().toString());
                        editor.putString(getString(R.string.pref_address), address.getText().toString());
                        editor.putString(getString(R.string.pref_email), email.getText().toString());
                        editor.putString(getString(R.string.pref_phone), phone.getText().toString());
                        editor.putString(getString(R.string.pref_dirty), "dirty");
                        editor.apply();



                        Intent intent = new Intent(UserCredentialPage.this, GeoForm.class);
                        startActivity(intent);
                    }
                }
            }
        });
    }

    public abstract class InputValidator implements TextWatcher {

        private final TextView textView;

        public InputValidator(TextView textView) {
            this.textView = textView;
        }

        public abstract void validate(TextView textView, String text);

        @Override
        final public void afterTextChanged(Editable s) {
            String text = textView.getText().toString();
            validate(textView, text);
        }

        @Override
        final public void beforeTextChanged(CharSequence s, int start, int count, int after) { /* Don't care */ }

        @Override
        final public void onTextChanged(CharSequence s, int start, int before, int count) { /* Don't care */ }
    }
}
