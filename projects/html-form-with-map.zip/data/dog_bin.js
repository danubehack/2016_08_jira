Map = Map || {};
Map.Dataset = Map.Dataset || {};

Map.Dataset.dogBin = {
    name: 'Bins for dog excrements',
    toGeoJSON: function toGeoJSON(feature) {
        var g = feature.geometry;
        var coordinates = proj4('EPSG:900913', 'EPSG:4326', [g.x, g.y]);
        return {
            type: 'Point',
            coordinates: coordinates,
            properties: {
                objectid: feature.attributes.OBJECTID.toString()
            }
        };
    },
    features: [{
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 1, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907723.3553692864, "y": 6134515.144384279}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 2, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907868.0406510518, "y": 6134633.168347331}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 3, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907578.289374858, "y": 6135858.167381211}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 4, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905666.109953701, "y": 6133506.819682743}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 5, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906131.359746718, "y": 6133184.100157914}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 6, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906328.1792856122, "y": 6133297.344730946}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 7, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906049.8672002924, "y": 6133312.46726103}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 8, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1906593.4146703524, "y": 6136024.521381834}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 9, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905647.6210108008, "y": 6133567.064622603}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 10, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906361.292381345, "y": 6136188.231030618}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 11, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906440.4739351438, "y": 6136000.910618652}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 12, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905903.4553532216, "y": 6133832.022995694}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 13, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905788.8296735517, "y": 6133666.2039099485}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 14, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906469.119779711, "y": 6135622.38108547}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 15, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905817.2272756535, "y": 6133906.684354695}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 16, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907335.521602942, "y": 6135452.673123237}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 17, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907209.430015724, "y": 6135323.936749239}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 18, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907484.3134607282, "y": 6135124.924557572}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 19, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907870.9249390622, "y": 6135584.584638186}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 20, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907786.5892928322, "y": 6135869.586952924}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 21, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907486.556548469, "y": 6136113.112403825}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 22, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907278.7119272058, "y": 6135734.559546791}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 23, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907292.918520621, "y": 6135743.263066393}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 24, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907754.0795487436, "y": 6135218.393562629}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 25, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907628.7649715673, "y": 6135299.428233725}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 26, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907293.2012721302, "y": 6133592.727856461}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 27, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906906.4884930616, "y": 6135169.72939651}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 28, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906110.4762102452, "y": 6134771.569931875}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 29, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906057.402416622, "y": 6134704.960906561}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 30, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906047.3669645262, "y": 6134680.669471078}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 35, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906486.1917368204, "y": 6134823.675148161}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 37, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906879.510214467, "y": 6133371.807846553}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 38, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906363.371829431, "y": 6134301.737677008}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 39, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906835.8484837902, "y": 6133304.381994157}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 40, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906826.7013612334, "y": 6133466.460928476}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 41, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906615.9412825098, "y": 6133734.577191736}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 43, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906517.2645689244, "y": 6134523.071403083}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 44, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907005.6251787841, "y": 6133990.465331706}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 45, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905908.4124101433, "y": 6134419.20959603}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 46, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907204.6455040106, "y": 6134097.6639879355}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 47, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907477.4194446616, "y": 6134155.180846063}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 48, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906043.723477594, "y": 6133985.5754013425}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 49, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905741.4187024185, "y": 6134165.046019915}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 50, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905864.6375788639, "y": 6134179.573598105}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 51, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1909996.793366058, "y": 6136101.89649938}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 52, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1910045.4665888937, "y": 6136130.107895783}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 53, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1909988.9329854925, "y": 6136212.697018733}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 54, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906815.7675608434, "y": 6137246.906379274}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 55, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906688.485968267, "y": 6137183.931043649}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 56, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1906782.0065856788, "y": 6137106.037271707}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 57, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906778.8339801931, "y": 6137646.727093521}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 58, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1905415.9706051107, "y": 6136019.55683954}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 59, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1904982.5949218918, "y": 6136399.611396349}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 60, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907266.1973900516, "y": 6137853.550216682}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 61, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907375.7068259285, "y": 6137059.013524094}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 62, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1904391.0253367028, "y": 6133445.836049738}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 63, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1902397.145201672, "y": 6134456.860701116}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 64, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1901933.0069337667, "y": 6134417.218476545}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 65, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1902928.867202222, "y": 6134680.864750302}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 66, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903199.226623126, "y": 6135253.048693283}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 67, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903189.4037912556, "y": 6135245.23199782}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 68, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1902844.0595613567, "y": 6134902.519565901}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 69, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1902837.1866959976, "y": 6134904.030098377}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 70, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1910066.1419579189, "y": 6138130.564989392}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 71, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903041.8564853768, "y": 6135106.350389191}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 72, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1909849.0344418315, "y": 6138294.850922272}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 73, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1902646.036658768, "y": 6135430.282452917}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 74, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903393.9477896118, "y": 6134487.026434041}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 75, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903175.233933276, "y": 6134581.409780648}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 76, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903218.2978782877, "y": 6134636.578204882}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 77, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903723.2853899319, "y": 6134522.65331295}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 78, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903453.2298712446, "y": 6134414.621510003}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 79, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903400.5479222238, "y": 6134601.603445601}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 80, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903376.6097789232, "y": 6134748.259718376}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 81, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903130.7874001872, "y": 6134981.580025309}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 82, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903371.9065304396, "y": 6134902.185746607}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 83, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903722.781112637, "y": 6135385.412820891}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 84, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903748.8955519812, "y": 6135487.896734039}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 85, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1903879.583298339, "y": 6135480.557217925}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 86, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1904046.752000307, "y": 6135068.83329584}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 87, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1904634.9797743827, "y": 6135186.826502815}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 88, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905119.3776330142, "y": 6134632.267063632}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 89, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1900731.4738873213, "y": 6136627.060250387}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 90, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1900757.498157876, "y": 6136125.759276854}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 92, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1900663.3151895, "y": 6135994.008021669}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 93, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1908507.4119387867, "y": 6135397.9017146025}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 94, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1908607.2198810398, "y": 6135435.590508728}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 95, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1907385.0854930263, "y": 6137148.411622767}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 96, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905467.4647751653, "y": 6134677.663506696}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 97, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905478.8416271196, "y": 6134560.828948393}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 98, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905970.3951026201, "y": 6135497.861927451}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 99, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1906034.0765305194, "y": 6135345.2555259215}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 100, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905868.7047477777, "y": 6135372.656875283}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 101, "SLUZ_ZOD": 6, "TYP_SPE": 1},
        "geometry": {"type": "point", "x": 1905932.7846994605, "y": 6135216.502406707}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 102, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1906879.8519653091, "y": 6133573.447756365}
    }, {
        "attributes": {"HARM": "pondelok, streda, piatok", "OBJECTID": 103, "SLUZ_ZOD": 6, "TYP_SPE": 2},
        "geometry": {"type": "point", "x": 1907156.3005623554, "y": 6134076.2965810895}
    }]
};


