Map = Map || {};
Map.Dataset = Map.Dataset || {};

(function BinDataset() {

    var toGeoJSON = function toGeoJsonFunction(feature) {
        var g = feature.geometry;
        var coordinates = proj4('EPSG:900913', 'EPSG:4326', [g.x, g.y]);
        return {
            type: 'Point',
            coordinates: coordinates,
            properties: {
                objectid: feature.attributes.OBJECTID.toString()
            }
        }
    };

    Map.Dataset['7753'] = {
        name: "PUB_Stanovistia_odpadove_kose_7753",
        toGeoJSON: toGeoJSON,
        features: [{
            "attributes": {"OBJECTID": 345, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907848.8402652794, "y": 6135014.176174133}
        }, {
            "attributes": {"OBJECTID": 346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.2130650233, "y": 6135013.4267400615}
        }, {
            "attributes": {"OBJECTID": 349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906536.2075840354, "y": 6133104.368773531}
        }, {
            "attributes": {"OBJECTID": 350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906565.3298760212, "y": 6133154.167635243}
        }, {
            "attributes": {"OBJECTID": 353, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905999.9448614477, "y": 6133175.073831727}
        }, {
            "attributes": {"OBJECTID": 354, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905885.5484999334, "y": 6133224.651158371}
        }, {
            "attributes": {"OBJECTID": 356, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907840.3343429922, "y": 6135150.92311975}
        }, {
            "attributes": {"OBJECTID": 357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905774.2123112124, "y": 6133163.778004506}
        }, {
            "attributes": {"OBJECTID": 358, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.8898875266, "y": 6135165.57154832}
        }, {
            "attributes": {"OBJECTID": 363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906858.7680537517, "y": 6135709.554087101}
        }, {
            "attributes": {"OBJECTID": 364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906827.7689151494, "y": 6135670.728999089}
        }, {
            "attributes": {"OBJECTID": 383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906769.20707063, "y": 6135220.9941113405}
        }, {
            "attributes": {"OBJECTID": 386, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906598.8860233244, "y": 6135105.091860547}
        }, {
            "attributes": {"OBJECTID": 387, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906612.6417727985, "y": 6135142.161782422}
        }, {
            "attributes": {"OBJECTID": 388, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906561.3312799102, "y": 6135250.072572857}
        }, {
            "attributes": {"OBJECTID": 390, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905960.3796880296, "y": 6133355.435284176}
        }, {
            "attributes": {"OBJECTID": 391, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906580.5583823624, "y": 6135729.86893096}
        }, {
            "attributes": {"OBJECTID": 401, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906206.9000399762, "y": 6133862.607088116}
        }, {
            "attributes": {"OBJECTID": 402, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906236.8182663263, "y": 6133900.809820434}
        }, {
            "attributes": {"OBJECTID": 403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906624.413808955, "y": 6135907.524879314}
        }, {
            "attributes": {"OBJECTID": 407, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906696.8983821901, "y": 6136505.417891464}
        }, {
            "attributes": {"OBJECTID": 410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906676.3922187868, "y": 6136409.190352738}
        }, {
            "attributes": {"OBJECTID": 1339, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906616.923120419, "y": 6134840.165685656}
        }, {
            "attributes": {"OBJECTID": 1342, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906938.2390382283, "y": 6137284.862098317}
        }, {
            "attributes": {"OBJECTID": 1346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907316.2009921253, "y": 6137842.011120579}
        }, {
            "attributes": {"OBJECTID": 1348, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907284.5761266637, "y": 6137809.872373871}
        }, {
            "attributes": {"OBJECTID": 1349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908077.4083455852, "y": 6133854.920000021}
        }, {
            "attributes": {"OBJECTID": 1350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907254.134810034, "y": 6137805.757655936}
        }, {
            "attributes": {"OBJECTID": 1351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907243.301531144, "y": 6137718.194810188}
        }, {
            "attributes": {"OBJECTID": 1357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907248.111312386, "y": 6137860.711443323}
        }, {
            "attributes": {"OBJECTID": 1363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904432.7723721378, "y": 6133446.189838004}
        }, {
            "attributes": {"OBJECTID": 1364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907333.7360383107, "y": 6137820.413968332}
        }, {
            "attributes": {"OBJECTID": 1383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907408.2064399433, "y": 6137165.926226611}
        }, {
            "attributes": {"OBJECTID": 1400, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908667.9345331918, "y": 6136248.218900026}
        }, {
            "attributes": {"OBJECTID": 1403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908721.0084381397, "y": 6136304.426733956}
        }, {
            "attributes": {"OBJECTID": 1405, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908672.0067114865, "y": 6136266.099756174}
        }, {
            "attributes": {"OBJECTID": 1410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903783.5704601684, "y": 6135409.308987891}
        }, {
            "attributes": {"OBJECTID": 1413, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909621.075501779, "y": 6136833.027335045}
        }, {
            "attributes": {"OBJECTID": 1416, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909440.45628838, "y": 6136759.90973799}
        }, {
            "attributes": {"OBJECTID": 1417, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904418.6648530723, "y": 6135120.694958167}
        }, {
            "attributes": {"OBJECTID": 1418, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904451.7868543589, "y": 6135138.117449314}
        }, {
            "attributes": {"OBJECTID": 1419, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910677.9015591538, "y": 6137353.686694399}
        }, {
            "attributes": {"OBJECTID": 1420, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910604.0811520324, "y": 6137204.668443268}
        }, {
            "attributes": {"OBJECTID": 1422, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910397.4721771227, "y": 6137120.400218231}
        }, {
            "attributes": {"OBJECTID": 1423, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910406.1907196415, "y": 6137071.466461144}
        }, {
            "attributes": {"OBJECTID": 1424, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910378.2350559146, "y": 6137128.81965746}
        }, {
            "attributes": {"OBJECTID": 1425, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904785.1742577518, "y": 6134939.962489767}
        }, {
            "attributes": {"OBJECTID": 1426, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910460.586988814, "y": 6137274.834719923}
        }, {
            "attributes": {"OBJECTID": 1427, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910476.0013987068, "y": 6137302.734769103}
        }, {
            "attributes": {"OBJECTID": 1428, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910536.0337737016, "y": 6137416.2792742355}
        }, {
            "attributes": {"OBJECTID": 1429, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905075.0490985836, "y": 6134479.370663384}
        }, {
            "attributes": {"OBJECTID": 1430, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905113.1014401182, "y": 6134425.920656795}
        }, {
            "attributes": {"OBJECTID": 1431, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911271.7954953192, "y": 6137687.382723167}
        }, {
            "attributes": {"OBJECTID": 1432, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911431.4608183242, "y": 6137765.124338194}
        }, {
            "attributes": {"OBJECTID": 1433, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905229.3301204555, "y": 6133882.9742918005}
        }, {
            "attributes": {"OBJECTID": 1434, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905214.1539342785, "y": 6133675.415997124}
        }, {
            "attributes": {"OBJECTID": 1435, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912220.2932166203, "y": 6138276.475252947}
        }, {
            "attributes": {"OBJECTID": 1436, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912071.8664867692, "y": 6138174.418789366}
        }, {
            "attributes": {"OBJECTID": 1437, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912091.6535262552, "y": 6138197.651509614}
        }, {
            "attributes": {"OBJECTID": 1438, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912178.5717846698, "y": 6138247.266285219}
        }, {
            "attributes": {"OBJECTID": 1441, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912846.7681413484, "y": 6138441.1062933775}
        }, {
            "attributes": {"OBJECTID": 1443, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1913065.8358823548, "y": 6138261.931535584}
        }, {
            "attributes": {"OBJECTID": 1445, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912758.927044357, "y": 6138442.532291378}
        }, {
            "attributes": {"OBJECTID": 1447, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912757.433136795, "y": 6138439.099209948}
        }, {
            "attributes": {"OBJECTID": 1450, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912754.0857597026, "y": 6138441.238206532}
        }, {
            "attributes": {"OBJECTID": 1452, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912702.2409332586, "y": 6138440.738940304}
        }, {
            "attributes": {"OBJECTID": 1465, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911399.8207020953, "y": 6138084.699404689}
        }, {
            "attributes": {"OBJECTID": 1472, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910814.6775911078, "y": 6137877.062571503}
        }, {
            "attributes": {"OBJECTID": 1585, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908596.730245422, "y": 6135532.7535495395}
        }, {
            "attributes": {"OBJECTID": 1586, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908606.222458402, "y": 6135415.283040061}
        }, {
            "attributes": {"OBJECTID": 1589, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908756.2655472637, "y": 6135376.92165216}
        }, {
            "attributes": {"OBJECTID": 1590, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908749.6932445276, "y": 6135378.148506168}
        }, {
            "attributes": {"OBJECTID": 1614, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907626.248037877, "y": 6134420.851894421}
        }, {
            "attributes": {"OBJECTID": 1615, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907632.8581892445, "y": 6134411.381978941}
        }, {
            "attributes": {"OBJECTID": 1629, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907110.2376702558, "y": 6133853.511621956}
        }, {
            "attributes": {"OBJECTID": 1630, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907096.7045597625, "y": 6133838.591740583}
        }, {
            "attributes": {"OBJECTID": 1641, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906512.8316041601, "y": 6133233.770988021}
        }, {
            "attributes": {"OBJECTID": 1660, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907370.1185874874, "y": 6134297.605285088}
        }, {
            "attributes": {"OBJECTID": 1661, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907398.999316183, "y": 6134323.813295608}
        }, {
            "attributes": {"OBJECTID": 1664, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907833.4748359637, "y": 6134916.942240977}
        }, {
            "attributes": {"OBJECTID": 1665, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.5145493213, "y": 6134939.057835544}
        }, {
            "attributes": {"OBJECTID": 1666, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.062592191, "y": 6134961.834454023}
        }, {
            "attributes": {"OBJECTID": 1667, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908170.3888408255, "y": 6135513.787899686}
        }, {
            "attributes": {"OBJECTID": 1670, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910887.2745970227, "y": 6136651.843016668}
        }, {
            "attributes": {"OBJECTID": 1673, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909141.435438187, "y": 6134588.688440576}
        }, {
            "attributes": {"OBJECTID": 1679, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902658.5769107249, "y": 6134888.784414844}
        }, {
            "attributes": {"OBJECTID": 1681, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902794.7305554005, "y": 6134668.203321417}
        }, {
            "attributes": {"OBJECTID": 1685, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902928.7558827314, "y": 6134529.484624535}
        }, {
            "attributes": {"OBJECTID": 1688, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902936.7686596822, "y": 6134503.371118392}
        }, {
            "attributes": {"OBJECTID": 1690, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903124.5234524382, "y": 6134372.552764615}
        }, {
            "attributes": {"OBJECTID": 1693, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903306.2992753403, "y": 6134159.14460513}
        }, {
            "attributes": {"OBJECTID": 1699, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902387.4759907008, "y": 6134800.21123772}
        }, {
            "attributes": {"OBJECTID": 1703, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902279.6886673518, "y": 6134816.189322536}
        }, {
            "attributes": {"OBJECTID": 2350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906558.831044144, "y": 6133180.804354591}
        }, {
            "attributes": {"OBJECTID": 2351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905853.8769916047, "y": 6133166.364579083}
        }],
    };

    Map.Dataset['9881'] = {
        name: "PUB_Stanovistia_odpadove_kose_9881",
        toGeoJSON: toGeoJSON,
        features: [{
            "attributes": {
                "OBJECTID": 4,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907646.477015744, "y": 6134429.584120446}
        }, {
            "attributes": {
                "OBJECTID": 5,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907715.4182895925, "y": 6134490.693261866}
        }, {
            "attributes": {
                "OBJECTID": 6,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907821.748440809, "y": 6134559.178277997}
        }, {
            "attributes": {
                "OBJECTID": 7,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907841.465349017, "y": 6134647.840925626}
        }, {
            "attributes": {
                "OBJECTID": 8,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907880.0397789662, "y": 6134658.688067981}
        }, {
            "attributes": {
                "OBJECTID": 9,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907874.1053369122, "y": 6134665.229073374}
        }, {
            "attributes": {
                "OBJECTID": 10,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907884.4613891423, "y": 6134700.716493143}
        }, {
            "attributes": {
                "OBJECTID": 11,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906376.5041897618, "y": 6133093.139789345}
        }, {
            "attributes": {
                "OBJECTID": 12,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907911.3762156214, "y": 6134724.936215856}
        }, {
            "attributes": {
                "OBJECTID": 13,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907914.4263696715, "y": 6134716.39229235}
        }, {
            "attributes": {
                "OBJECTID": 15,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907928.1041955033, "y": 6134755.755498992}
        }, {
            "attributes": {
                "OBJECTID": 16,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908026.389287123, "y": 6134733.44676663}
        }, {
            "attributes": {
                "OBJECTID": 17,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908040.845236193, "y": 6134732.855918154}
        }, {
            "attributes": {
                "OBJECTID": 18,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906428.131943198, "y": 6133092.692566031}
        }, {
            "attributes": {
                "OBJECTID": 21,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906431.6084509008, "y": 6133090.064295139}
        }, {
            "attributes": {
                "OBJECTID": 22,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.8802800188, "y": 6134786.478086811}
        }, {
            "attributes": {
                "OBJECTID": 23,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907800.6812271758, "y": 6134787.356019712}
        }, {
            "attributes": {
                "OBJECTID": 24,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907774.9975942546, "y": 6134792.663676843}
        }, {
            "attributes": {
                "OBJECTID": 25,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907750.6898702492, "y": 6134744.76636305}
        }, {
            "attributes": {
                "OBJECTID": 27,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907786.0115446786, "y": 6134712.598519317}
        }, {
            "attributes": {
                "OBJECTID": 29,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907812.108172903, "y": 6134711.887500005}
        }, {
            "attributes": {
                "OBJECTID": 30,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907848.3627046647, "y": 6134703.1115905065}
        }, {
            "attributes": {
                "OBJECTID": 31,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.5197215707, "y": 6134917.242678862}
        }, {
            "attributes": {
                "OBJECTID": 32,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.0865720527, "y": 6134716.357242085}
        }, {
            "attributes": {
                "OBJECTID": 33,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907729.6905615025, "y": 6134742.660002332}
        }, {
            "attributes": {
                "OBJECTID": 34,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 3,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906500.4818198502, "y": 6133053.246893748}
        }, {
            "attributes": {
                "OBJECTID": 35,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907662.1597056075, "y": 6134667.57242023}
        }, {
            "attributes": {
                "OBJECTID": 36,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907449.1131245452, "y": 6135096.707794487}
        }, {
            "attributes": {
                "OBJECTID": 37,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906528.3573335435, "y": 6133146.805088411}
        }, {
            "attributes": {
                "OBJECTID": 38,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.151231805, "y": 6135099.478557988}
        }, {
            "attributes": {
                "OBJECTID": 40,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907412.9632331051, "y": 6135158.646256893}
        }, {
            "attributes": {
                "OBJECTID": 42,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907421.7775103862, "y": 6135422.954670598}
        }, {
            "attributes": {
                "OBJECTID": 43,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907308.720322339, "y": 6135500.140402958}
        }, {
            "attributes": {
                "OBJECTID": 44,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907577.3298008451, "y": 6135856.473059273}
        }, {
            "attributes": {
                "OBJECTID": 47,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905712.2273923503, "y": 6133475.442503791}
        }, {
            "attributes": {
                "OBJECTID": 48,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905669.2024091596, "y": 6133419.392087442}
        }, {
            "attributes": {
                "OBJECTID": 49,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905661.8308324786, "y": 6133420.176426934}
        }, {
            "attributes": {
                "OBJECTID": 50,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.0137016822, "y": 6133176.200244628}
        }, {
            "attributes": {
                "OBJECTID": 51,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905779.9152087253, "y": 6133185.002957936}
        }, {
            "attributes": {
                "OBJECTID": 52,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.2096239834, "y": 6133185.243259624}
        }, {
            "attributes": {
                "OBJECTID": 53,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4687077007, "y": 6133189.029680803}
        }, {
            "attributes": {
                "OBJECTID": 54,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905791.541416347, "y": 6133195.754796161}
        }, {
            "attributes": {
                "OBJECTID": 55,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.839692301, "y": 6133202.311371518}
        }, {
            "attributes": {
                "OBJECTID": 56,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905769.2162924698, "y": 6133220.0303371465}
        }, {
            "attributes": {
                "OBJECTID": 57,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905786.3194190299, "y": 6133250.383621233}
        }, {
            "attributes": {
                "OBJECTID": 58,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905789.408534901, "y": 6133301.973937828}
        }, {
            "attributes": {
                "OBJECTID": 59,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905760.1994137128, "y": 6133306.951923367}
        }, {
            "attributes": {
                "OBJECTID": 60,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905717.122110358, "y": 6133294.487773948}
        }, {
            "attributes": {
                "OBJECTID": 61,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905700.78708828, "y": 6133277.319351502}
        }, {
            "attributes": {
                "OBJECTID": 62,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905687.9641961385, "y": 6133270.577484287}
        }, {
            "attributes": {
                "OBJECTID": 63,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905701.0631606213, "y": 6133254.880969473}
        }, {
            "attributes": {
                "OBJECTID": 64,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905726.2247051212, "y": 6133242.992622522}
        }, {
            "attributes": {
                "OBJECTID": 65,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906468.336090494, "y": 6132973.329831266}
        }, {
            "attributes": {
                "OBJECTID": 67,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906136.028486164, "y": 6132947.676630723}
        }, {
            "attributes": {
                "OBJECTID": 68,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.8995363861, "y": 6133191.144003098}
        }, {
            "attributes": {
                "OBJECTID": 69,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906323.5149989496, "y": 6133347.712104884}
        }, {
            "attributes": {
                "OBJECTID": 70,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906259.6732709762, "y": 6133332.7163406145}
        }, {
            "attributes": {
                "OBJECTID": 71,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.8993380351, "y": 6133335.765221341}
        }, {
            "attributes": {
                "OBJECTID": 72,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906181.126238272, "y": 6133341.532565195}
        }, {
            "attributes": {
                "OBJECTID": 73,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906152.0106254548, "y": 6133351.797312073}
        }, {
            "attributes": {
                "OBJECTID": 74,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906097.7846751055, "y": 6133379.9382346915}
        }, {
            "attributes": {
                "OBJECTID": 75,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0724219524, "y": 6133772.077423403}
        }, {
            "attributes": {
                "OBJECTID": 76,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905804.5524384317, "y": 6133192.041797571}
        }, {
            "attributes": {
                "OBJECTID": 77,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905851.459132264, "y": 6133286.92652144}
        }, {
            "attributes": {
                "OBJECTID": 78,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905889.343381373, "y": 6133344.828430389}
        }, {
            "attributes": {
                "OBJECTID": 79,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905894.1245534986, "y": 6133361.584795577}
        }, {
            "attributes": {
                "OBJECTID": 80,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905955.6385909207, "y": 6133472.143250674}
        }, {
            "attributes": {
                "OBJECTID": 81,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905973.7458192932, "y": 6133518.38297485}
        }, {
            "attributes": {
                "OBJECTID": 82,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906596.985799615, "y": 6135773.156234862}
        }, {
            "attributes": {
                "OBJECTID": 83,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905992.9417522824, "y": 6133537.926626156}
        }, {
            "attributes": {
                "OBJECTID": 84,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906580.9179443119, "y": 6135793.152399067}
        }, {
            "attributes": {
                "OBJECTID": 85,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905998.240560046, "y": 6133552.385385543}
        }, {
            "attributes": {
                "OBJECTID": 86,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906571.4145993867, "y": 6135812.070258994}
        }, {
            "attributes": {
                "OBJECTID": 87,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906575.9686797545, "y": 6135834.141426641}
        }, {
            "attributes": {
                "OBJECTID": 88,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906088.5885719655, "y": 6133703.991887836}
        }, {
            "attributes": {
                "OBJECTID": 89,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906582.7636214716, "y": 6135884.895980203}
        }, {
            "attributes": {
                "OBJECTID": 90,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906604.0512476943, "y": 6135966.319232119}
        }, {
            "attributes": {
                "OBJECTID": 91,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905885.1009955795, "y": 6133558.955584718}
        }, {
            "attributes": {
                "OBJECTID": 92,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906595.8347560787, "y": 6136037.608823871}
        }, {
            "attributes": {
                "OBJECTID": 93,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905879.1932701997, "y": 6133530.638846611}
        }, {
            "attributes": {
                "OBJECTID": 94,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906546.0805096717, "y": 6136139.701574597}
        }, {
            "attributes": {
                "OBJECTID": 95,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905846.472019075, "y": 6133480.772711071}
        }, {
            "attributes": {
                "OBJECTID": 96,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905782.1905791187, "y": 6133386.631792789}
        }, {
            "attributes": {
                "OBJECTID": 97,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906437.8534743334, "y": 6136158.595160377}
        }, {
            "attributes": {
                "OBJECTID": 98,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906460.7474408108, "y": 6136176.447116566}
        }, {
            "attributes": {
                "OBJECTID": 99,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905801.9642602676, "y": 6133485.727437082}
        }, {
            "attributes": {
                "OBJECTID": 100,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905843.32946985, "y": 6133634.8228091365}
        }, {
            "attributes": {
                "OBJECTID": 101,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905912.9531321742, "y": 6133739.46364099}
        }, {
            "attributes": {
                "OBJECTID": 102,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905871.359717632, "y": 6133759.67534645}
        }, {
            "attributes": {
                "OBJECTID": 103,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906412.3924804, "y": 6135836.433345888}
        }, {
            "attributes": {
                "OBJECTID": 104,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905860.5327839616, "y": 6133742.65285168}
        }, {
            "attributes": {
                "OBJECTID": 105,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906400.4100504096, "y": 6135817.717414381}
        }, {
            "attributes": {
                "OBJECTID": 106,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905834.4027598826, "y": 6133659.882287752}
        }, {
            "attributes": {
                "OBJECTID": 107,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906501.7085606437, "y": 6135786.602185356}
        }, {
            "attributes": {
                "OBJECTID": 108,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4041424014, "y": 6133685.817990802}
        }, {
            "attributes": {
                "OBJECTID": 109,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906483.2428835048, "y": 6135714.989179464}
        }, {
            "attributes": {
                "OBJECTID": 110,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906522.9182632242, "y": 6135738.654239509}
        }, {
            "attributes": {
                "OBJECTID": 111,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905772.1172783978, "y": 6133546.158970819}
        }, {
            "attributes": {
                "OBJECTID": 112,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906496.5143932023, "y": 6135743.703751165}
        }, {
            "attributes": {
                "OBJECTID": 113,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.8096360397, "y": 6133555.686338421}
        }, {
            "attributes": {
                "OBJECTID": 114,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905666.960434615, "y": 6133646.715037914}
        }, {
            "attributes": {
                "OBJECTID": 115,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905659.6901586684, "y": 6133761.617915645}
        }, {
            "attributes": {
                "OBJECTID": 116,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905748.2681906915, "y": 6133785.891723458}
        }, {
            "attributes": {
                "OBJECTID": 117,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905837.378329872, "y": 6133855.63278393}
        }, {
            "attributes": {
                "OBJECTID": 118,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906741.6655154082, "y": 6135782.570901889}
        }, {
            "attributes": {"OBJECTID": 119, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906810.6858260944, "y": 6135761.683375359}
        }, {
            "attributes": {
                "OBJECTID": 120,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.260376592, "y": 6135714.578542763}
        }, {
            "attributes": {
                "OBJECTID": 121,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.13278112, "y": 6135721.75300317}
        }, {
            "attributes": {
                "OBJECTID": 122,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906867.4587663948, "y": 6135764.01700682}
        }, {
            "attributes": {
                "OBJECTID": 123,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906904.852096546, "y": 6135779.941805}
        }, {
            "attributes": {
                "OBJECTID": 124,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906997.458780941, "y": 6135708.802922888}
        }, {
            "attributes": {"OBJECTID": 125, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907041.6325812768, "y": 6135657.688856835}
        }, {
            "attributes": {
                "OBJECTID": 126,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0596261825, "y": 6135627.201842946}
        }, {
            "attributes": {
                "OBJECTID": 127,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907064.9039208235, "y": 6135601.023226205}
        }, {
            "attributes": {
                "OBJECTID": 128,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907093.6243494516, "y": 6135582.047409704}
        }, {
            "attributes": {
                "OBJECTID": 129,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907128.9527030494, "y": 6135555.60853213}
        }, {
            "attributes": {
                "OBJECTID": 130,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.1153218506, "y": 6135579.082859484}
        }, {
            "attributes": {
                "OBJECTID": 131,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907174.481261587, "y": 6135587.567551837}
        }, {
            "attributes": {"OBJECTID": 132, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907361.2185942, "y": 6135472.815429038}
        }, {
            "attributes": {
                "OBJECTID": 133,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907266.4267082072, "y": 6135385.840133711}
        }, {
            "attributes": {
                "OBJECTID": 134,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907227.2277759132, "y": 6135308.5135520995}
        }, {
            "attributes": {
                "OBJECTID": 135,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.4883665496, "y": 6135182.897320038}
        }, {
            "attributes": {
                "OBJECTID": 136,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907303.5105701755, "y": 6135176.669719245}
        }, {
            "attributes": {
                "OBJECTID": 137,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.1983651738, "y": 6135182.510076971}
        }, {
            "attributes": {
                "OBJECTID": 139,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907341.7120798256, "y": 6135216.7527803695}
        }, {
            "attributes": {
                "OBJECTID": 140,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907583.5035798044, "y": 6135322.107329599}
        }, {
            "attributes": {
                "OBJECTID": 141,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.7468133282, "y": 6135231.474764664}
        }, {
            "attributes": {
                "OBJECTID": 142,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907831.5657067003, "y": 6135171.860899544}
        }, {
            "attributes": {
                "OBJECTID": 143,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907864.1967890353, "y": 6135147.5147264525}
        }, {
            "attributes": {"OBJECTID": 144, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907984.9951344694, "y": 6135239.777173777}
        }, {
            "attributes": {"OBJECTID": 145, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908064.1633299312, "y": 6135386.546201428}
        }, {
            "attributes": {"OBJECTID": 146, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908130.7446305694, "y": 6135487.708113231}
        }, {
            "attributes": {"OBJECTID": 147, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907891.53351639, "y": 6135123.025076605}
        }, {
            "attributes": {
                "OBJECTID": 148,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907856.6448747816, "y": 6135051.726410447}
        }, {
            "attributes": {
                "OBJECTID": 150,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907748.3321234307, "y": 6134877.857031423}
        }, {
            "attributes": {
                "OBJECTID": 152,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907642.1589327005, "y": 6134737.709555971}
        }, {
            "attributes": {"OBJECTID": 153, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906746.9565308073, "y": 6135229.319878531}
        }, {
            "attributes": {"OBJECTID": 154, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906744.7902535193, "y": 6135232.501298524}
        }, {
            "attributes": {
                "OBJECTID": 155,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906750.1636453376, "y": 6135211.590076912}
        }, {
            "attributes": {
                "OBJECTID": 156,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906735.1277217162, "y": 6135108.540296236}
        }, {
            "attributes": {"OBJECTID": 157, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906710.4604357486, "y": 6135003.361963634}
        }, {
            "attributes": {
                "OBJECTID": 158,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905497.435321667, "y": 6133248.65643989}
        }, {
            "attributes": {
                "OBJECTID": 159,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905293.2316269958, "y": 6133591.755422778}
        }, {
            "attributes": {
                "OBJECTID": 160,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905248.0547267254, "y": 6133584.603607826}
        }, {
            "attributes": {"OBJECTID": 161, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907759.278168962, "y": 6135468.582319318}
        }, {
            "attributes": {
                "OBJECTID": 162,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905519.2828849296, "y": 6133181.386752148}
        }, {
            "attributes": {
                "OBJECTID": 163,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905558.9783021545, "y": 6133156.438812004}
        }, {
            "attributes": {
                "OBJECTID": 164,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905587.6575425698, "y": 6133157.308233975}
        }, {
            "attributes": {
                "OBJECTID": 165,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905616.4091406483, "y": 6133148.971131676}
        }, {
            "attributes": {
                "OBJECTID": 166,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905692.951309321, "y": 6133198.176172728}
        }, {
            "attributes": {
                "OBJECTID": 167,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905546.161977863, "y": 6133527.85273696}
        }, {
            "attributes": {
                "OBJECTID": 168,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907872.9620857395, "y": 6135576.9429088915}
        }, {
            "attributes": {
                "OBJECTID": 169,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905648.324438659, "y": 6133249.911358091}
        }, {
            "attributes": {
                "OBJECTID": 170,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905612.8001627605, "y": 6133219.699920983}
        }, {
            "attributes": {
                "OBJECTID": 171,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905604.09720497, "y": 6133233.770988021}
        }, {
            "attributes": {
                "OBJECTID": 172,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905603.225573355, "y": 6133259.525172384}
        }, {
            "attributes": {
                "OBJECTID": 173,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905570.4709263826, "y": 6133246.450320832}
        }, {
            "attributes": {
                "OBJECTID": 174,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 175,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 176,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905527.4604147242, "y": 6133304.098300724}
        }, {
            "attributes": {"OBJECTID": 178, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907618.6226527581, "y": 6136041.5851399405}
        }, {
            "attributes": {"OBJECTID": 179, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907445.390600775, "y": 6136130.805678224}
        }, {
            "attributes": {"OBJECTID": 180, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906944.3482518822, "y": 6136350.162583382}
        }, {
            "attributes": {
                "OBJECTID": 181,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906887.1912593313, "y": 6135896.308910409}
        }, {
            "attributes": {
                "OBJECTID": 182,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906894.473780419, "y": 6135916.91131614}
        }, {
            "attributes": {
                "OBJECTID": 183,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907202.3823787584, "y": 6135633.828719667}
        }, {
            "attributes": {"OBJECTID": 184, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907439.1856523587, "y": 6135991.046667373}
        }, {
            "attributes": {"OBJECTID": 185, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907529.1162161857, "y": 6135583.663223543}
        }, {
            "attributes": {
                "OBJECTID": 186,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907804.006340365, "y": 6135668.924544019}
        }, {
            "attributes": {
                "OBJECTID": 187,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907815.7961876353, "y": 6135676.699895229}
        }, {
            "attributes": {
                "OBJECTID": 190,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907829.342656465, "y": 6135649.918530623}
        }, {
            "attributes": {
                "OBJECTID": 192,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907397.7759149764, "y": 6134282.636229421}
        }, {
            "attributes": {
                "OBJECTID": 193,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907416.7748124688, "y": 6134278.6173370145}
        }, {
            "attributes": {
                "OBJECTID": 194,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907428.3320020025, "y": 6134217.224316813}
        }, {
            "attributes": {
                "OBJECTID": 195,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907438.7414875864, "y": 6134211.084204533}
        }, {
            "attributes": {
                "OBJECTID": 196,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907462.296691838, "y": 6134200.134153838}
        }, {
            "attributes": {
                "OBJECTID": 197,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907483.4963756693, "y": 6134182.596744726}
        }, {
            "attributes": {
                "OBJECTID": 198,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907492.7503649334, "y": 6134206.567995368}
        }, {
            "attributes": {
                "OBJECTID": 199,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907527.1035597967, "y": 6134241.025429731}
        }, {
            "attributes": {
                "OBJECTID": 200,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907470.1970361024, "y": 6134224.899880601}
        }, {
            "attributes": {
                "OBJECTID": 201,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907461.9682993393, "y": 6134241.4593613045}
        }, {
            "attributes": {
                "OBJECTID": 202,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907443.0295143751, "y": 6134254.071758889}
        }, {
            "attributes": {
                "OBJECTID": 203,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907098.4489361814, "y": 6133863.529986417}
        }, {
            "attributes": {
                "OBJECTID": 204,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907270.0913458404, "y": 6133756.808221914}
        }, {
            "attributes": {
                "OBJECTID": 205,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907358.6649250803, "y": 6133600.065754151}
        }, {
            "attributes": {
                "OBJECTID": 206,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.006687113, "y": 6133593.433442532}
        }, {
            "attributes": {
                "OBJECTID": 207,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906925.9148574024, "y": 6135151.806097471}
        }, {
            "attributes": {
                "OBJECTID": 209,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906898.4489994373, "y": 6135164.686900031}
        }, {
            "attributes": {
                "OBJECTID": 210,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.6340761255, "y": 6133959.782483528}
        }, {
            "attributes": {
                "OBJECTID": 211,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907218.6995897226, "y": 6133542.709495614}
        }, {
            "attributes": {
                "OBJECTID": 214,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907243.3702152714, "y": 6133282.314010506}
        }, {
            "attributes": {
                "OBJECTID": 215,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907250.7328863922, "y": 6133302.387796385}
        }, {
            "attributes": {
                "OBJECTID": 216,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906783.1231201715, "y": 6135294.303871372}
        }, {
            "attributes": {
                "OBJECTID": 218,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906824.2556720169, "y": 6135259.69531034}
        }, {
            "attributes": {
                "OBJECTID": 219,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907327.297318962, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 220,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.7252739812, "y": 6135307.007955775}
        }, {
            "attributes": {
                "OBJECTID": 222,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906932.012939105, "y": 6135331.387966124}
        }, {
            "attributes": {
                "OBJECTID": 223,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906124.8497828958, "y": 6134696.311852438}
        }, {
            "attributes": {
                "OBJECTID": 224,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906916.8334133404, "y": 6135331.828629688}
        }, {
            "attributes": {
                "OBJECTID": 225,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906163.724775474, "y": 6134730.994912638}
        }, {
            "attributes": {
                "OBJECTID": 226,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906930.386561345, "y": 6135345.627753703}
        }, {
            "attributes": {
                "OBJECTID": 227,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906929.048501067, "y": 6135367.035051325}
        }, {
            "attributes": {
                "OBJECTID": 229,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0050796329, "y": 6133327.906887838}
        }, {
            "attributes": {
                "OBJECTID": 230,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906808.2278917367, "y": 6135478.664334871}
        }, {
            "attributes": {
                "OBJECTID": 231,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906285.8834450825, "y": 6134777.45674723}
        }, {
            "attributes": {
                "OBJECTID": 232,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907082.3833072695, "y": 6133470.876618177}
        }, {
            "attributes": {
                "OBJECTID": 233,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906238.9934491746, "y": 6134782.579131111}
        }, {
            "attributes": {
                "OBJECTID": 234,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907141.4416367193, "y": 6133405.240612703}
        }, {
            "attributes": {
                "OBJECTID": 235,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907108.9679601442, "y": 6133409.968170566}
        }, {
            "attributes": {
                "OBJECTID": 236,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906998.839142627, "y": 6135537.040106047}
        }, {
            "attributes": {
                "OBJECTID": 237,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907084.4841286999, "y": 6133407.579609558}
        }, {
            "attributes": {
                "OBJECTID": 238,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906235.5636956634, "y": 6134717.622389816}
        }, {
            "attributes": {
                "OBJECTID": 239,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906977.0049377014, "y": 6135542.550203828}
        }, {
            "attributes": {
                "OBJECTID": 240,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906959.2828747688, "y": 6135585.821537337}
        }, {
            "attributes": {
                "OBJECTID": 241,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906182.8138417562, "y": 6134735.975398264}
        }, {
            "attributes": {
                "OBJECTID": 242,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906942.584951148, "y": 6135596.669868377}
        }, {
            "attributes": {
                "OBJECTID": 243,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.6280587597, "y": 6134722.437630584}
        }, {
            "attributes": {
                "OBJECTID": 244,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906903.8691454474, "y": 6135599.172047316}
        }, {
            "attributes": {
                "OBJECTID": 245,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906200.3911893498, "y": 6134625.310491835}
        }, {
            "attributes": {
                "OBJECTID": 247,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906279.8710793862, "y": 6134595.785181681}
        }, {
            "attributes": {
                "OBJECTID": 248,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906330.7685769657, "y": 6134693.991864491}
        }, {
            "attributes": {
                "OBJECTID": 250,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906426.239511859, "y": 6134918.412717605}
        }, {
            "attributes": {
                "OBJECTID": 251,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906713.7009461273, "y": 6137049.766073912}
        }, {
            "attributes": {
                "OBJECTID": 252,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906357.4006519476, "y": 6134635.658561328}
        }, {
            "attributes": {
                "OBJECTID": 254,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907261.9661362097, "y": 6134934.314244338}
        }, {
            "attributes": {
                "OBJECTID": 255,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907061.684561152, "y": 6133558.022706246}
        }, {
            "attributes": {
                "OBJECTID": 257,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907155.4244779577, "y": 6133633.741394827}
        }, {
            "attributes": {
                "OBJECTID": 258,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906515.113653722, "y": 6134709.809521383}
        }, {
            "attributes": {
                "OBJECTID": 259,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907404.9471165736, "y": 6134828.777530707}
        }, {
            "attributes": {
                "OBJECTID": 260,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906474.230457531, "y": 6134671.312763659}
        }, {
            "attributes": {
                "OBJECTID": 261,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.4669114826, "y": 6134801.351217088}
        }, {
            "attributes": {
                "OBJECTID": 262,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907489.5298920665, "y": 6134815.782067106}
        }, {
            "attributes": {"OBJECTID": 263, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906494.343663131, "y": 6134623.412790773}
        }, {
            "attributes": {
                "OBJECTID": 264,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907002.439214955, "y": 6133632.401309067}
        }, {
            "attributes": {
                "OBJECTID": 265,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906881.4082117847, "y": 6133364.375023093}
        }, {
            "attributes": {
                "OBJECTID": 266,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906878.7654870776, "y": 6133357.804973257}
        }, {
            "attributes": {
                "OBJECTID": 267,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906858.7335447075, "y": 6133331.408008984}
        }, {
            "attributes": {
                "OBJECTID": 268,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906857.6069914591, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 269,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906839.1958608762, "y": 6133306.835108379}
        }, {
            "attributes": {
                "OBJECTID": 270,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906885.807558064, "y": 6133332.19567801}
        }, {
            "attributes": {
                "OBJECTID": 271,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906341.568793962, "y": 6134184.148874081}
        }, {
            "attributes": {
                "OBJECTID": 272,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906240.8458055027, "y": 6134243.305239685}
        }, {
            "attributes": {
                "OBJECTID": 273,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906611.289240988, "y": 6133728.605981251}
        }, {
            "attributes": {
                "OBJECTID": 274,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906257.9856674985, "y": 6134261.473644381}
        }, {
            "attributes": {
                "OBJECTID": 275,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906606.4924841279, "y": 6133714.28043343}
        }, {
            "attributes": {
                "OBJECTID": 276,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906272.658689577, "y": 6134249.328547244}
        }, {
            "attributes": {
                "OBJECTID": 277,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906322.3912286905, "y": 6134071.191976742}
        }, {
            "attributes": {
                "OBJECTID": 278,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906292.777461149, "y": 6134288.335783156}
        }, {
            "attributes": {
                "OBJECTID": 280,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906289.5447431349, "y": 6134293.983602368}
        }, {
            "attributes": {
                "OBJECTID": 282,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906315.0179822159, "y": 6134350.530427965}
        }, {
            "attributes": {
                "OBJECTID": 283,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906324.766230025, "y": 6134342.868103432}
        }, {
            "attributes": {
                "OBJECTID": 284,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906306.3528730506, "y": 6134443.448550367}
        }, {
            "attributes": {
                "OBJECTID": 285,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906015.5017602881, "y": 6134271.30472677}
        }, {
            "attributes": {
                "OBJECTID": 286,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906884.470610982, "y": 6133865.520977125}
        }, {
            "attributes": {
                "OBJECTID": 287,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906793.7763954375, "y": 6133941.070487846}
        }, {
            "attributes": {
                "OBJECTID": 288,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906214.3205972344, "y": 6134337.337081016}
        }, {
            "attributes": {
                "OBJECTID": 289,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906569.3841318712, "y": 6134001.880743126}
        }, {
            "attributes": {
                "OBJECTID": 290,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906641.476860498, "y": 6134204.942427686}
        }, {
            "attributes": {
                "OBJECTID": 291,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906646.5263126008, "y": 6134234.992114218}
        }, {
            "attributes": {
                "OBJECTID": 293,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906670.6381143113, "y": 6134252.963562831}
        }, {
            "attributes": {
                "OBJECTID": 294,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906672.5116213406, "y": 6134236.984860286}
        }, {
            "attributes": {
                "OBJECTID": 295,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906701.2220312066, "y": 6134225.198625232}
        }, {
            "attributes": {
                "OBJECTID": 297,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906216.3811210108, "y": 6134438.957253705}
        }, {
            "attributes": {
                "OBJECTID": 298,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.6415111914, "y": 6133975.334928264}
        }, {
            "attributes": {
                "OBJECTID": 299,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906230.7680519987, "y": 6134486.682616858}
        }, {
            "attributes": {
                "OBJECTID": 300,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907012.8698512467, "y": 6134003.135771743}
        }, {
            "attributes": {
                "OBJECTID": 302,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907000.916364322, "y": 6134046.592920031}
        }, {
            "attributes": {
                "OBJECTID": 304,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906156.8641552562, "y": 6134537.604429045}
        }, {
            "attributes": {
                "OBJECTID": 305,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907035.7894212017, "y": 6134129.914637219}
        }, {
            "attributes": {
                "OBJECTID": 306,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907059.290078904, "y": 6134122.134015094}
        }, {
            "attributes": {
                "OBJECTID": 307,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906046.097922331, "y": 6134429.866182182}
        }, {
            "attributes": {
                "OBJECTID": 309,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906069.3358660352, "y": 6134415.622910897}
        }, {
            "attributes": {
                "OBJECTID": 310,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907106.5329576058, "y": 6134155.070695309}
        }, {
            "attributes": {
                "OBJECTID": 311,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907167.741979615, "y": 6134108.146603881}
        }, {
            "attributes": {
                "OBJECTID": 312,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907173.686440425, "y": 6134094.808432774}
        }, {
            "attributes": {
                "OBJECTID": 313,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905962.716284141, "y": 6134358.117654796}
        }, {
            "attributes": {
                "OBJECTID": 314,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907179.438318515, "y": 6134089.164082843}
        }, {
            "attributes": {
                "OBJECTID": 315,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907188.0900693368, "y": 6134077.146069259}
        }, {
            "attributes": {
                "OBJECTID": 316,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905916.2448495151, "y": 6134318.535970863}
        }, {
            "attributes": {
                "OBJECTID": 317,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.068567665, "y": 6134082.401549034}
        }, {
            "attributes": {
                "OBJECTID": 318,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905888.5173907478, "y": 6134298.403056877}
        }, {
            "attributes": {
                "OBJECTID": 319,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907150.5030432697, "y": 6134094.501348002}
        }, {
            "attributes": {
                "OBJECTID": 320,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907204.9516326063, "y": 6134078.995250095}
        }, {
            "attributes": {
                "OBJECTID": 321,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0459279153, "y": 6134249.665679012}
        }, {
            "attributes": {
                "OBJECTID": 322,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905954.5376411567, "y": 6134179.789560949}
        }, {
            "attributes": {
                "OBJECTID": 323,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907336.0960115148, "y": 6134150.990111642}
        }, {
            "attributes": {
                "OBJECTID": 324,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905968.5616706077, "y": 6134157.120167109}
        }, {
            "attributes": {
                "OBJECTID": 326,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907385.1812277888, "y": 6134116.900207198}
        }, {
            "attributes": {
                "OBJECTID": 329,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906008.651158826, "y": 6134122.5529201375}
        }, {
            "attributes": {
                "OBJECTID": 330,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906020.9619813086, "y": 6134105.81843063}
        }, {
            "attributes": {
                "OBJECTID": 331,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906036.5322384853, "y": 6134141.17669137}
        }, {
            "attributes": {
                "OBJECTID": 332,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906031.5095030628, "y": 6134153.471840617}
        }, {
            "attributes": {
                "OBJECTID": 333,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906043.8225519375, "y": 6134199.947230371}
        }, {
            "attributes": {
                "OBJECTID": 334,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906049.8237856883, "y": 6134262.646931442}
        }, {
            "attributes": {
                "OBJECTID": 335,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906090.5689457082, "y": 6134303.919033328}
        }, {
            "attributes": {
                "OBJECTID": 336,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.7793113354, "y": 6134309.394957787}
        }, {
            "attributes": {
                "OBJECTID": 337,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906066.9925907555, "y": 6134079.327368352}
        }, {
            "attributes": {
                "OBJECTID": 338,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906059.9638781059, "y": 6134023.146159797}
        }, {
            "attributes": {
                "OBJECTID": 339,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905773.6910020383, "y": 6134301.15103078}
        }, {
            "attributes": {
                "OBJECTID": 340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906158.7499074328, "y": 6133923.748898265}
        }, {
            "attributes": {
                "OBJECTID": 341,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906178.0983481251, "y": 6133936.018701617}
        }, {
            "attributes": {
                "OBJECTID": 342,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.9920734921, "y": 6133947.51748596}
        }, {
            "attributes": {
                "OBJECTID": 343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.0021029364, "y": 6134014.556206834}
        }, {
            "attributes": {
                "OBJECTID": 344,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906801.247046468, "y": 6135170.4704985265}
        }, {
            "attributes": {"OBJECTID": 345, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907848.8402652794, "y": 6135014.176174133}
        }, {
            "attributes": {"OBJECTID": 346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.2130650233, "y": 6135013.4267400615}
        }, {
            "attributes": {
                "OBJECTID": 347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906399.385911092, "y": 6132915.121723553}
        }, {
            "attributes": {
                "OBJECTID": 348,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906491.7187495374, "y": 6133016.828476875}
        }, {
            "attributes": {"OBJECTID": 349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906536.2075840354, "y": 6133104.368773531}
        }, {
            "attributes": {"OBJECTID": 350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906565.3298760212, "y": 6133154.167635243}
        }, {
            "attributes": {
                "OBJECTID": 351,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906485.8844950222, "y": 6133159.943200547}
        }, {
            "attributes": {"OBJECTID": 353, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905999.9448614477, "y": 6133175.073831727}
        }, {
            "attributes": {"OBJECTID": 354, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905885.5484999334, "y": 6133224.651158371}
        }, {
            "attributes": {"OBJECTID": 356, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907840.3343429922, "y": 6135150.92311975}
        }, {
            "attributes": {"OBJECTID": 357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905774.2123112124, "y": 6133163.778004506}
        }, {
            "attributes": {"OBJECTID": 358, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.8898875266, "y": 6135165.57154832}
        }, {
            "attributes": {
                "OBJECTID": 359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905966.8651615635, "y": 6134033.423406463}
        }, {
            "attributes": {
                "OBJECTID": 360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905985.8295500178, "y": 6134041.72465369}
        }, {
            "attributes": {
                "OBJECTID": 361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905870.0851094637, "y": 6133872.007971832}
        }, {
            "attributes": {"OBJECTID": 363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906858.7680537517, "y": 6135709.554087101}
        }, {
            "attributes": {"OBJECTID": 364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906827.7689151494, "y": 6135670.728999089}
        }, {
            "attributes": {
                "OBJECTID": 366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906070.799717336, "y": 6133845.282319519}
        }, {
            "attributes": {
                "OBJECTID": 367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910120.8412387487, "y": 6135953.935843512}
        }, {
            "attributes": {
                "OBJECTID": 368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906065.837094442, "y": 6133848.002611272}
        }, {
            "attributes": {
                "OBJECTID": 369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909934.4120384865, "y": 6136045.222586026}
        }, {
            "attributes": {"OBJECTID": 370, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906794.03688305, "y": 6135325.327175188}
        }, {
            "attributes": {
                "OBJECTID": 371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905995.7792861008, "y": 6133860.102078953}
        }, {
            "attributes": {
                "OBJECTID": 372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910014.880445601, "y": 6136065.760246598}
        }, {
            "attributes": {"OBJECTID": 373, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906804.5710464614, "y": 6135296.31188661}
        }, {
            "attributes": {
                "OBJECTID": 375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910059.0768437947, "y": 6136019.056879912}
        }, {
            "attributes": {
                "OBJECTID": 377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910132.6074862834, "y": 6135966.526225806}
        }, {
            "attributes": {
                "OBJECTID": 378,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910083.1014823418, "y": 6135959.959186392}
        }, {
            "attributes": {
                "OBJECTID": 379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910094.3647884205, "y": 6135969.744644521}
        }, {
            "attributes": {"OBJECTID": 380, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906795.7434108434, "y": 6135243.000326736}
        }, {
            "attributes": {"OBJECTID": 381, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906160.2749844515, "y": 6133796.644316355}
        }, {
            "attributes": {
                "OBJECTID": 382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910006.2676565996, "y": 6135914.218744822}
        }, {
            "attributes": {"OBJECTID": 383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906769.20707063, "y": 6135220.9941113405}
        }, {
            "attributes": {"OBJECTID": 385, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906014.7848627681, "y": 6133559.035688775}
        }, {
            "attributes": {"OBJECTID": 386, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906598.8860233244, "y": 6135105.091860547}
        }, {
            "attributes": {"OBJECTID": 387, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906612.6417727985, "y": 6135142.161782422}
        }, {
            "attributes": {"OBJECTID": 388, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906561.3312799102, "y": 6135250.072572857}
        }, {
            "attributes": {"OBJECTID": 389, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906010.336535912, "y": 6133448.260834667}
        }, {
            "attributes": {"OBJECTID": 390, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905960.3796880296, "y": 6133355.435284176}
        }, {
            "attributes": {"OBJECTID": 391, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906580.5583823624, "y": 6135729.86893096}
        }, {
            "attributes": {
                "OBJECTID": 392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906859.6085159031, "y": 6137216.622397439}
        }, {
            "attributes": {"OBJECTID": 393, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906142.7377118748, "y": 6133695.469009558}
        }, {
            "attributes": {"OBJECTID": 394, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906632.3876240782, "y": 6135810.39597746}
        }, {
            "attributes": {"OBJECTID": 396, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906619.653787524, "y": 6135778.018808932}
        }, {
            "attributes": {
                "OBJECTID": 397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906860.7662386084, "y": 6137238.151243906}
        }, {
            "attributes": {"OBJECTID": 398, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906168.1653099603, "y": 6133792.442075281}
        }, {
            "attributes": {"OBJECTID": 399, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906202.4717506317, "y": 6133846.3637605505}
        }, {
            "attributes": {"OBJECTID": 400, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906621.2779388987, "y": 6135731.180967732}
        }, {
            "attributes": {"OBJECTID": 401, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906206.9000399762, "y": 6133862.607088116}
        }, {
            "attributes": {"OBJECTID": 402, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906236.8182663263, "y": 6133900.809820434}
        }, {
            "attributes": {"OBJECTID": 403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906624.413808955, "y": 6135907.524879314}
        }, {
            "attributes": {
                "OBJECTID": 404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906770.481010882, "y": 6137270.244268141}
        }, {
            "attributes": {"OBJECTID": 405, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906256.1945368883, "y": 6133940.878563307}
        }, {
            "attributes": {
                "OBJECTID": 406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906787.8820284002, "y": 6137212.496444865}
        }, {
            "attributes": {"OBJECTID": 407, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906696.8983821901, "y": 6136505.417891464}
        }, {
            "attributes": {
                "OBJECTID": 408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906727.4879763827, "y": 6137189.626853192}
        }, {
            "attributes": {"OBJECTID": 410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906676.3922187868, "y": 6136409.190352738}
        }, {
            "attributes": {
                "OBJECTID": 411,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906717.9237396885, "y": 6137095.055301927}
        }, {
            "attributes": {
                "OBJECTID": 413,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906794.406352437, "y": 6137063.648271751}
        }, {
            "attributes": {"OBJECTID": 1339, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906616.923120419, "y": 6134840.165685656}
        }, {
            "attributes": {
                "OBJECTID": 1340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906695.915097124, "y": 6137479.032426407}
        }, {
            "attributes": {"OBJECTID": 1341, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906652.1702107873, "y": 6134964.311410765}
        }, {
            "attributes": {"OBJECTID": 1342, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906938.2390382283, "y": 6137284.862098317}
        }, {
            "attributes": {
                "OBJECTID": 1343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904966.246541477, "y": 6136399.846780123}
        }, {
            "attributes": {"OBJECTID": 1344, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906456.240114628, "y": 6133739.431932456}
        }, {
            "attributes": {"OBJECTID": 1345, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906500.7690241362, "y": 6133704.447487404}
        }, {
            "attributes": {"OBJECTID": 1346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907316.2009921253, "y": 6137842.011120579}
        }, {
            "attributes": {
                "OBJECTID": 1347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908042.77273318, "y": 6133905.679007986}
        }, {
            "attributes": {"OBJECTID": 1348, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907284.5761266637, "y": 6137809.872373871}
        }, {
            "attributes": {"OBJECTID": 1349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908077.4083455852, "y": 6133854.920000021}
        }, {
            "attributes": {"OBJECTID": 1350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907254.134810034, "y": 6137805.757655936}
        }, {
            "attributes": {"OBJECTID": 1351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907243.301531144, "y": 6137718.194810188}
        }, {
            "attributes": {
                "OBJECTID": 1353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907258.779059185, "y": 6137671.14382304}
        }, {
            "attributes": {
                "OBJECTID": 1354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907259.2187711743, "y": 6137663.60875678}
        }, {
            "attributes": {
                "OBJECTID": 1355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.412832607, "y": 6137766.827887203}
        }, {
            "attributes": {"OBJECTID": 1357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907248.111312386, "y": 6137860.711443323}
        }, {
            "attributes": {
                "OBJECTID": 1358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907269.2508836829, "y": 6137859.3539988715}
        }, {
            "attributes": {
                "OBJECTID": 1359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907315.52773184, "y": 6137882.661834108}
        }, {
            "attributes": {
                "OBJECTID": 1360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906767.8877120249, "y": 6137156.780836513}
        }, {
            "attributes": {
                "OBJECTID": 1362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906877.1898710004, "y": 6137235.290967833}
        }, {
            "attributes": {"OBJECTID": 1363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904432.7723721378, "y": 6133446.189838004}
        }, {
            "attributes": {"OBJECTID": 1364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907333.7360383107, "y": 6137820.413968332}
        }, {
            "attributes": {
                "OBJECTID": 1365,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907858.0486135606, "y": 6137428.283611665}
        }, {
            "attributes": {
                "OBJECTID": 1366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907819.7524823379, "y": 6137391.93506388}
        }, {
            "attributes": {
                "OBJECTID": 1367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907778.9282854795, "y": 6137305.85351642}
        }, {
            "attributes": {
                "OBJECTID": 1368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907763.7376277635, "y": 6137379.217866931}
        }, {
            "attributes": {
                "OBJECTID": 1369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907611.6729769527, "y": 6137459.161048759}
        }, {
            "attributes": {
                "OBJECTID": 1370,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907870.510273959, "y": 6137209.943540874}
        }, {
            "attributes": {
                "OBJECTID": 1371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907581.783693674, "y": 6137390.519258433}
        }, {
            "attributes": {
                "OBJECTID": 1372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907552.2328216438, "y": 6137343.243511785}
        }, {
            "attributes": {
                "OBJECTID": 1373,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907566.5333687093, "y": 6137240.561743476}
        }, {
            "attributes": {
                "OBJECTID": 1375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.2001773324, "y": 6137213.031200798}
        }, {
            "attributes": {
                "OBJECTID": 1376,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907779.0677688005, "y": 6137338.635492823}
        }, {
            "attributes": {
                "OBJECTID": 1377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907472.560794167, "y": 6137245.394932402}
        }, {
            "attributes": {
                "OBJECTID": 1379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907517.7794392481, "y": 6137325.04352088}
        }, {
            "attributes": {
                "OBJECTID": 1380,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907353.5542472599, "y": 6137229.295944471}
        }, {
            "attributes": {
                "OBJECTID": 1381,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907439.834644986, "y": 6137206.0257838685}
        }, {
            "attributes": {
                "OBJECTID": 1382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907406.4755331797, "y": 6137197.233960351}
        }, {
            "attributes": {"OBJECTID": 1383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907408.2064399433, "y": 6137165.926226611}
        }, {
            "attributes": {
                "OBJECTID": 1384,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.1271984961, "y": 6136987.293039824}
        }, {
            "attributes": {
                "OBJECTID": 1386,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.3372909485, "y": 6136976.401208523}
        }, {
            "attributes": {
                "OBJECTID": 1387,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907229.928052802, "y": 6136949.479378961}
        }, {
            "attributes": {
                "OBJECTID": 1390,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907233.8601911713, "y": 6136936.972694761}
        }, {
            "attributes": {"OBJECTID": 1391, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907319.5160865586, "y": 6137076.944156449}
        }, {
            "attributes": {
                "OBJECTID": 1392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907657.6569435264, "y": 6136912.49845904}
        }, {
            "attributes": {
                "OBJECTID": 1393,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907360.652757226, "y": 6137114.5289873695}
        }, {
            "attributes": {
                "OBJECTID": 1394,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.4651177218, "y": 6136979.402971807}
        }, {
            "attributes": {
                "OBJECTID": 1395,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907612.0781798977, "y": 6136946.168268726}
        }, {
            "attributes": {
                "OBJECTID": 1396,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.3893610672, "y": 6136764.746161338}
        }, {
            "attributes": {
                "OBJECTID": 1397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.0523130537, "y": 6135691.834975468}
        }, {
            "attributes": {
                "OBJECTID": 1398,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907277.2224724204, "y": 6135685.78394481}
        }, {
            "attributes": {
                "OBJECTID": 1399,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907305.1881548974, "y": 6135726.328435803}
        }, {
            "attributes": {"OBJECTID": 1400, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908667.9345331918, "y": 6136248.218900026}
        }, {
            "attributes": {
                "OBJECTID": 1401,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907311.9730778649, "y": 6135723.829558209}
        }, {
            "attributes": {
                "OBJECTID": 1402,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907345.7552037367, "y": 6135701.641827347}
        }, {
            "attributes": {"OBJECTID": 1403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908721.0084381397, "y": 6136304.426733956}
        }, {
            "attributes": {
                "OBJECTID": 1404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907356.1413122215, "y": 6135691.971854008}
        }, {
            "attributes": {"OBJECTID": 1405, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908672.0067114865, "y": 6136266.099756174}
        }, {
            "attributes": {
                "OBJECTID": 1406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907362.6824455007, "y": 6135673.121029386}
        }, {
            "attributes": {
                "OBJECTID": 1407,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907357.245601573, "y": 6135674.14260847}
        }, {
            "attributes": {
                "OBJECTID": 1408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907375.4396591475, "y": 6135611.110405456}
        }, {
            "attributes": {"OBJECTID": 1409, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904036.109856986, "y": 6135451.82016015}
        }, {
            "attributes": {"OBJECTID": 1410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903783.5704601684, "y": 6135409.308987891}
        }, {
            "attributes": {"OBJECTID": 1411, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904059.602722318, "y": 6135178.883012386}
        }, {
            "attributes": {"OBJECTID": 1412, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904045.515240764, "y": 6135177.038601404}
        }, {
            "attributes": {"OBJECTID": 1413, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909621.075501779, "y": 6136833.027335045}
        }, {
            "attributes": {"OBJECTID": 1414, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904042.5485763284, "y": 6135173.606829606}
        }, {
            "attributes": {"OBJECTID": 1416, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909440.45628838, "y": 6136759.90973799}
        }, {
            "attributes": {"OBJECTID": 1417, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904418.6648530723, "y": 6135120.694958167}
        }, {
            "attributes": {"OBJECTID": 1418, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904451.7868543589, "y": 6135138.117449314}
        }, {
            "attributes": {"OBJECTID": 1419, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910677.9015591538, "y": 6137353.686694399}
        }, {
            "attributes": {"OBJECTID": 1420, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910604.0811520324, "y": 6137204.668443268}
        }, {
            "attributes": {"OBJECTID": 1422, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910397.4721771227, "y": 6137120.400218231}
        }, {
            "attributes": {"OBJECTID": 1423, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910406.1907196415, "y": 6137071.466461144}
        }, {
            "attributes": {"OBJECTID": 1424, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910378.2350559146, "y": 6137128.81965746}
        }, {
            "attributes": {"OBJECTID": 1425, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904785.1742577518, "y": 6134939.962489767}
        }, {
            "attributes": {"OBJECTID": 1426, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910460.586988814, "y": 6137274.834719923}
        }, {
            "attributes": {"OBJECTID": 1427, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910476.0013987068, "y": 6137302.734769103}
        }, {
            "attributes": {"OBJECTID": 1428, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910536.0337737016, "y": 6137416.2792742355}
        }, {
            "attributes": {"OBJECTID": 1429, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905075.0490985836, "y": 6134479.370663384}
        }, {
            "attributes": {"OBJECTID": 1430, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905113.1014401182, "y": 6134425.920656795}
        }, {
            "attributes": {"OBJECTID": 1431, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911271.7954953192, "y": 6137687.382723167}
        }, {
            "attributes": {"OBJECTID": 1432, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911431.4608183242, "y": 6137765.124338194}
        }, {
            "attributes": {"OBJECTID": 1433, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905229.3301204555, "y": 6133882.9742918005}
        }, {
            "attributes": {"OBJECTID": 1434, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905214.1539342785, "y": 6133675.415997124}
        }, {
            "attributes": {"OBJECTID": 1435, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912220.2932166203, "y": 6138276.475252947}
        }, {
            "attributes": {"OBJECTID": 1436, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912071.8664867692, "y": 6138174.418789366}
        }, {
            "attributes": {"OBJECTID": 1437, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912091.6535262552, "y": 6138197.651509614}
        }, {
            "attributes": {"OBJECTID": 1438, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912178.5717846698, "y": 6138247.266285219}
        }, {
            "attributes": {
                "OBJECTID": 1439,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904889.3960178106, "y": 6133530.835768434}
        }, {
            "attributes": {
                "OBJECTID": 1440,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904888.875042598, "y": 6133497.215603691}
        }, {
            "attributes": {"OBJECTID": 1441, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912846.7681413484, "y": 6138441.1062933775}
        }, {
            "attributes": {
                "OBJECTID": 1442,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904940.096479893, "y": 6133419.400431476}
        }, {
            "attributes": {"OBJECTID": 1443, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1913065.8358823548, "y": 6138261.931535584}
        }, {
            "attributes": {
                "OBJECTID": 1444,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904375.7489629807, "y": 6133433.388386225}
        }, {
            "attributes": {"OBJECTID": 1445, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912758.927044357, "y": 6138442.532291378}
        }, {
            "attributes": {
                "OBJECTID": 1446,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904392.6049602774, "y": 6133433.707128955}
        }, {
            "attributes": {"OBJECTID": 1447, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912757.433136795, "y": 6138439.099209948}
        }, {
            "attributes": {
                "OBJECTID": 1448,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904422.776995059, "y": 6133390.925618779}
        }, {
            "attributes": {
                "OBJECTID": 1449,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903842.1389838622, "y": 6133831.448898312}
        }, {
            "attributes": {"OBJECTID": 1450, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912754.0857597026, "y": 6138441.238206532}
        }, {
            "attributes": {
                "OBJECTID": 1451,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903846.3513133947, "y": 6133828.002645931}
        }, {
            "attributes": {"OBJECTID": 1452, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912702.2409332586, "y": 6138440.738940304}
        }, {
            "attributes": {
                "OBJECTID": 1453,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903126.560599116, "y": 6134120.0511727985}
        }, {
            "attributes": {
                "OBJECTID": 1454,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902672.4639058828, "y": 6134271.89303993}
        }, {
            "attributes": {
                "OBJECTID": 1455,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902422.3301232648, "y": 6134458.788407438}
        }, {
            "attributes": {
                "OBJECTID": 1456,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902934.4253843962, "y": 6134391.781256603}
        }, {
            "attributes": {
                "OBJECTID": 1457,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902817.5543906, "y": 6134545.286956214}
        }, {
            "attributes": {
                "OBJECTID": 1458,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.532016836, "y": 6134538.984713131}
        }, {
            "attributes": {
                "OBJECTID": 1459,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.050825941, "y": 6134536.220807139}
        }, {
            "attributes": {
                "OBJECTID": 1460,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.703448855, "y": 6134511.081988187}
        }, {
            "attributes": {
                "OBJECTID": 1461,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.7220824712, "y": 6134478.062156511}
        }, {
            "attributes": {
                "OBJECTID": 1462,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902858.7771112348, "y": 6134458.925266265}
        }, {
            "attributes": {
                "OBJECTID": 1463,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902835.2953778482, "y": 6134496.741778757}
        }, {
            "attributes": {
                "OBJECTID": 1464,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902650.9336031675, "y": 6135065.051050501}
        }, {
            "attributes": {"OBJECTID": 1465, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911399.8207020953, "y": 6138084.699404689}
        }, {
            "attributes": {
                "OBJECTID": 1466,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902929.2991218474, "y": 6134619.765934589}
        }, {
            "attributes": {
                "OBJECTID": 1467,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902911.1251017842, "y": 6134655.688787508}
        }, {
            "attributes": {
                "OBJECTID": 1468,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902925.145791648, "y": 6134679.993504531}
        }, {
            "attributes": {
                "OBJECTID": 1469,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.8280886612, "y": 6135227.255127575}
        }, {
            "attributes": {
                "OBJECTID": 1470,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902880.7827481735, "y": 6134890.542137745}
        }, {
            "attributes": {
                "OBJECTID": 1471,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902822.806444178, "y": 6134888.338933716}
        }, {
            "attributes": {"OBJECTID": 1472, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910814.6775911078, "y": 6137877.062571503}
        }, {
            "attributes": {
                "OBJECTID": 1473,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902759.9688180112, "y": 6134828.119912373}
        }, {
            "attributes": {
                "OBJECTID": 1474,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902800.611564101, "y": 6134861.635144575}
        }, {
            "attributes": {
                "OBJECTID": 1475,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902821.9270201991, "y": 6134888.474130314}
        }, {
            "attributes": {
                "OBJECTID": 1476,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902793.7487174913, "y": 6134913.881113372}
        }, {
            "attributes": {
                "OBJECTID": 1477,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902752.4202433447, "y": 6135020.605620167}
        }, {
            "attributes": {
                "OBJECTID": 1478,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902789.9048554748, "y": 6135168.799680777}
        }, {
            "attributes": {
                "OBJECTID": 1479,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902836.1814809956, "y": 6135152.682398705}
        }, {
            "attributes": {
                "OBJECTID": 1480,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902856.578551294, "y": 6135145.313125429}
        }, {
            "attributes": {
                "OBJECTID": 1481,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902960.628879334, "y": 6135187.093567133}
        }, {
            "attributes": {
                "OBJECTID": 1482,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902954.121141903, "y": 6135190.570411448}
        }, {
            "attributes": {
                "OBJECTID": 1483,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902965.48129594, "y": 6135239.41496557}
        }, {
            "attributes": {
                "OBJECTID": 1484,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903034.0685738053, "y": 6135135.168075113}
        }, {
            "attributes": {
                "OBJECTID": 1485,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909983.7232333224, "y": 6138224.425820209}
        }, {
            "attributes": {
                "OBJECTID": 1486,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.855051162, "y": 6138223.562562364}
        }, {
            "attributes": {
                "OBJECTID": 1487,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.0190417874, "y": 6138231.215003898}
        }, {
            "attributes": {
                "OBJECTID": 1488,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903004.929583895, "y": 6135091.641973164}
        }, {
            "attributes": {
                "OBJECTID": 1489,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909985.4864227388, "y": 6138232.956381955}
        }, {
            "attributes": {
                "OBJECTID": 1490,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902915.3107146362, "y": 6134989.585089844}
        }, {
            "attributes": {
                "OBJECTID": 1491,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909957.8269801824, "y": 6138223.904859957}
        }, {
            "attributes": {
                "OBJECTID": 1492,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903092.6938704338, "y": 6134455.9477529125}
        }, {
            "attributes": {
                "OBJECTID": 1493,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903075.566253579, "y": 6134433.209198546}
        }, {
            "attributes": {
                "OBJECTID": 1494,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903077.3417994608, "y": 6134431.890684693}
        }, {
            "attributes": {
                "OBJECTID": 1495,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903283.5411186484, "y": 6134381.989257241}
        }, {
            "attributes": {
                "OBJECTID": 1496,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903289.4455044349, "y": 6134396.416062326}
        }, {
            "attributes": {
                "OBJECTID": 1497,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903390.1206255197, "y": 6134501.041168628}
        }, {
            "attributes": {
                "OBJECTID": 1498,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903373.257949054, "y": 6134490.6248322055}
        }, {
            "attributes": {
                "OBJECTID": 1499,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903244.264262712, "y": 6134572.216746877}
        }, {
            "attributes": {
                "OBJECTID": 1500,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902797.3613689276, "y": 6134939.809933671}
        }, {
            "attributes": {
                "OBJECTID": 1501,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903056.639713756, "y": 6134750.037274313}
        }, {
            "attributes": {
                "OBJECTID": 1502,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903579.9426212208, "y": 6134383.576471645}
        }, {
            "attributes": {
                "OBJECTID": 1503,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903607.5687792532, "y": 6134374.612302446}
        }, {
            "attributes": {
                "OBJECTID": 1504,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903611.4059621012, "y": 6134478.185663522}
        }, {
            "attributes": {
                "OBJECTID": 1505,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903588.2593003819, "y": 6134357.957431719}
        }, {
            "attributes": {
                "OBJECTID": 1506,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903590.3843894573, "y": 6134359.527951768}
        }, {
            "attributes": {
                "OBJECTID": 1507,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903391.6813247846, "y": 6134605.185201541}
        }, {
            "attributes": {
                "OBJECTID": 1508,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903361.4536302513, "y": 6134763.913906735}
        }, {
            "attributes": {
                "OBJECTID": 1509,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.1579453263, "y": 6134819.265436932}
        }, {
            "attributes": {
                "OBJECTID": 1510,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903174.6094309313, "y": 6135005.324844478}
        }, {
            "attributes": {
                "OBJECTID": 1511,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903759.4553188828, "y": 6135490.97642825}
        }, {
            "attributes": {
                "OBJECTID": 1512,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.2662390522, "y": 6135389.946343954}
        }, {
            "attributes": {
                "OBJECTID": 1513,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.786101075, "y": 6135412.795937644}
        }, {
            "attributes": {
                "OBJECTID": 1514,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904046.4046834921, "y": 6135180.286767989}
        }, {
            "attributes": {
                "OBJECTID": 1515,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904386.544727194, "y": 6135084.997155731}
        }, {
            "attributes": {
                "OBJECTID": 1516,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904404.317997095, "y": 6135091.795533436}
        }, {
            "attributes": {
                "OBJECTID": 1517,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903951.8053802196, "y": 6135410.080156165}
        }, {
            "attributes": {
                "OBJECTID": 1518,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903956.7546447767, "y": 6135410.422341251}
        }, {
            "attributes": {
                "OBJECTID": 1519,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904650.9752720164, "y": 6135173.122776307}
        }, {
            "attributes": {
                "OBJECTID": 1520,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905105.4938661188, "y": 6134594.496685447}
        }, {
            "attributes": {
                "OBJECTID": 1521,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908198.8777249127, "y": 6135018.369000285}
        }, {
            "attributes": {
                "OBJECTID": 1522,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908225.6991543393, "y": 6135553.104195939}
        }, {
            "attributes": {
                "OBJECTID": 1523,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908192.9232453469, "y": 6134974.260972653}
        }, {
            "attributes": {
                "OBJECTID": 1524,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.5945018777, "y": 6134987.166544743}
        }, {
            "attributes": {
                "OBJECTID": 1525,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.356278168, "y": 6134986.236848839}
        }, {
            "attributes": {
                "OBJECTID": 1526,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908194.4171529151, "y": 6134974.304369521}
        }, {
            "attributes": {
                "OBJECTID": 1527,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908242.6919632927, "y": 6135033.399430952}
        }, {
            "attributes": {
                "OBJECTID": 1529,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908307.5377930657, "y": 6135053.283704777}
        }, {
            "attributes": {
                "OBJECTID": 1530,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908348.8061546963, "y": 6135021.895849664}
        }, {
            "attributes": {
                "OBJECTID": 1531,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908421.2829355677, "y": 6134980.997505271}
        }, {
            "attributes": {
                "OBJECTID": 1532,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.776502847, "y": 6134973.229462425}
        }, {
            "attributes": {
                "OBJECTID": 1533,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908483.2333453852, "y": 6134952.398991281}
        }, {
            "attributes": {
                "OBJECTID": 1534,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908520.9517284546, "y": 6134922.533725532}
        }, {
            "attributes": {
                "OBJECTID": 1535,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908539.6478369322, "y": 6134905.7776429085}
        }, {
            "attributes": {
                "OBJECTID": 1536,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908642.8666083806, "y": 6134867.037985868}
        }, {
            "attributes": {
                "OBJECTID": 1537,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.0250864744, "y": 6134830.900603435}
        }, {
            "attributes": {
                "OBJECTID": 1538,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.1657252351, "y": 6134818.991707774}
        }, {
            "attributes": {
                "OBJECTID": 1539,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908967.673505419, "y": 6134831.73347567}
        }, {
            "attributes": {
                "OBJECTID": 1540,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908989.629048591, "y": 6134849.454145098}
        }, {
            "attributes": {
                "OBJECTID": 1541,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908976.5812910767, "y": 6134934.841680811}
        }, {
            "attributes": {
                "OBJECTID": 1542,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908955.3537773762, "y": 6134976.871461869}
        }, {
            "attributes": {
                "OBJECTID": 1543,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.9516408436, "y": 6135020.704098223}
        }, {
            "attributes": {
                "OBJECTID": 1544,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908838.8512510892, "y": 6135039.581861178}
        }, {
            "attributes": {
                "OBJECTID": 1545,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908807.899979874, "y": 6135046.62222588}
        }, {
            "attributes": {
                "OBJECTID": 1547,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.2121032153, "y": 6135096.797927737}
        }, {
            "attributes": {
                "OBJECTID": 1548,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908713.7303698289, "y": 6135115.103344178}
        }, {
            "attributes": {
                "OBJECTID": 1549,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908695.8992137972, "y": 6135130.078863059}
        }, {
            "attributes": {
                "OBJECTID": 1550,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908696.9556357616, "y": 6135127.373186116}
        }, {
            "attributes": {
                "OBJECTID": 1551,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908658.3333384313, "y": 6135152.40532059}
        }, {
            "attributes": {
                "OBJECTID": 1552,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908628.4629794687, "y": 6135158.803156662}
        }, {
            "attributes": {
                "OBJECTID": 1553,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908589.6959667997, "y": 6135190.166476511}
        }, {
            "attributes": {
                "OBJECTID": 1554,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908579.6293452473, "y": 6135197.549141636}
        }, {
            "attributes": {
                "OBJECTID": 1555,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908534.7943071306, "y": 6135274.145293947}
        }, {
            "attributes": {
                "OBJECTID": 1556,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908516.985414996, "y": 6135277.956007558}
        }, {
            "attributes": {
                "OBJECTID": 1557,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908234.7854964575, "y": 6135541.266071969}
        }, {
            "attributes": {
                "OBJECTID": 1558,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908457.3382054411, "y": 6135322.596398862}
        }, {
            "attributes": {
                "OBJECTID": 1559,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.7353146344, "y": 6135330.675226228}
        }, {
            "attributes": {
                "OBJECTID": 1560,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908420.9467507047, "y": 6135351.070960913}
        }, {
            "attributes": {
                "OBJECTID": 1561,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908350.7453402267, "y": 6135378.826197038}
        }, {
            "attributes": {
                "OBJECTID": 1562,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908314.4173375997, "y": 6135392.0228184955}
        }, {
            "attributes": {
                "OBJECTID": 1563,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908321.6375197736, "y": 6135399.171970646}
        }, {
            "attributes": {
                "OBJECTID": 1564,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908326.3073724087, "y": 6135414.949200769}
        }, {
            "attributes": {
                "OBJECTID": 1565,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908320.5666262703, "y": 6135413.904283873}
        }, {
            "attributes": {
                "OBJECTID": 1566,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905629.8977233479, "y": 6133368.219931417}
        }, {
            "attributes": {
                "OBJECTID": 1567,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908268.660574102, "y": 6135410.233722159}
        }, {
            "attributes": {
                "OBJECTID": 1568,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905646.6757970024, "y": 6133345.279004463}
        }, {
            "attributes": {
                "OBJECTID": 1569,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908213.391560119, "y": 6135427.69018661}
        }, {
            "attributes": {
                "OBJECTID": 1570,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905644.3035786513, "y": 6133334.613755583}
        }, {
            "attributes": {
                "OBJECTID": 1571,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908207.5528528271, "y": 6135439.666697211}
        }, {
            "attributes": {
                "OBJECTID": 1572,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908220.2777838216, "y": 6135415.059367735}
        }, {
            "attributes": {
                "OBJECTID": 1573,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908212.1625929405, "y": 6135411.597455}
        }, {
            "attributes": {
                "OBJECTID": 1574,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908168.4463157142, "y": 6135374.8251510095}
        }, {
            "attributes": {
                "OBJECTID": 1575,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908143.8580665844, "y": 6135347.8026993135}
        }, {
            "attributes": {
                "OBJECTID": 1576,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905662.9640648954, "y": 6133380.595741787}
        }, {
            "attributes": {
                "OBJECTID": 1577,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908132.1517089354, "y": 6135296.27683397}
        }, {
            "attributes": {
                "OBJECTID": 1578,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908136.7146948632, "y": 6135269.224585225}
        }, {
            "attributes": {
                "OBJECTID": 1579,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908128.0651704266, "y": 6135177.2939813575}
        }, {
            "attributes": {
                "OBJECTID": 1580,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905663.7488673017, "y": 6133415.146642566}
        }, {
            "attributes": {
                "OBJECTID": 1581,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908184.1501562786, "y": 6135167.227343104}
        }, {
            "attributes": {
                "OBJECTID": 1582,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908170.156183089, "y": 6135103.971870363}
        }, {
            "attributes": {
                "OBJECTID": 1583,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908233.726291504, "y": 6135131.611134524}
        }, {
            "attributes": {"OBJECTID": 1585, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908596.730245422, "y": 6135532.7535495395}
        }, {
            "attributes": {"OBJECTID": 1586, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908606.222458402, "y": 6135415.283040061}
        }, {
            "attributes": {"OBJECTID": 1587, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908669.6122292385, "y": 6135425.052852736}
        }, {
            "attributes": {"OBJECTID": 1588, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908718.432505123, "y": 6135406.147532516}
        }, {
            "attributes": {"OBJECTID": 1589, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908756.2655472637, "y": 6135376.92165216}
        }, {
            "attributes": {"OBJECTID": 1590, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908749.6932445276, "y": 6135378.148506168}
        }, {
            "attributes": {"OBJECTID": 1591, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908725.170673899, "y": 6135368.221843429}
        }, {
            "attributes": {
                "OBJECTID": 1593,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.2685742478, "y": 6136995.320014502}
        }, {
            "attributes": {
                "OBJECTID": 1594,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907249.2345260475, "y": 6136957.85808126}
        }, {
            "attributes": {"OBJECTID": 1595, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907278.7586813972, "y": 6137034.508387284}
        }, {
            "attributes": {"OBJECTID": 1596, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907285.1283826577, "y": 6137058.080264088}
        }, {
            "attributes": {"OBJECTID": 1598, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907288.3277048236, "y": 6137107.825334529}
        }, {
            "attributes": {"OBJECTID": 1599, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907261.467424888, "y": 6137064.098874668}
        }, {
            "attributes": {"OBJECTID": 1600, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907068.5062195493, "y": 6139309.312540341}
        }, {
            "attributes": {"OBJECTID": 1601, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905928.2383001384, "y": 6141376.495057559}
        }, {
            "attributes": {"OBJECTID": 1602, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905900.7390463247, "y": 6141329.869097706}
        }, {
            "attributes": {
                "OBJECTID": 1603,
                "POZN": "pondelok, streda",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 0,
                "UDRZV_DATE": null
            },
            "geometry": {"type": "point", "x": 1905912.5078542123, "y": 6141348.000772766}
        }, {
            "attributes": {"OBJECTID": 1604, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905909.9975996905, "y": 6141343.305408541}
        }, {
            "attributes": {"OBJECTID": 1605, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905912.5546083974, "y": 6141346.691215209}
        }, {
            "attributes": {"OBJECTID": 1606, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905919.103534041, "y": 6141359.547938782}
        }, {
            "attributes": {"OBJECTID": 1607, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905936.05949624, "y": 6141443.934593411}
        }, {
            "attributes": {"OBJECTID": 1609, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905906.4387155753, "y": 6141401.774652854}
        }, {
            "attributes": {
                "OBJECTID": 1610,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905477.7707336233, "y": 6134690.765580139}
        }, {
            "attributes": {
                "OBJECTID": 1611,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905468.0825983358, "y": 6134672.796550506}
        }, {
            "attributes": {
                "OBJECTID": 1612,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905438.4025957016, "y": 6134664.00399058}
        }, {
            "attributes": {
                "OBJECTID": 1613,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905410.192010347, "y": 6134537.370765492}
        }, {
            "attributes": {"OBJECTID": 1614, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907626.248037877, "y": 6134420.851894421}
        }, {
            "attributes": {"OBJECTID": 1615, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907632.8581892445, "y": 6134411.381978941}
        }, {
            "attributes": {
                "OBJECTID": 1616,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905981.2031119806, "y": 6135472.533332942}
        }, {
            "attributes": {
                "OBJECTID": 1617,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906021.5185787673, "y": 6135418.474544364}
        }, {
            "attributes": {
                "OBJECTID": 1618,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906029.670505078, "y": 6135361.20458282}
        }, {
            "attributes": {
                "OBJECTID": 1619,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905909.9753357936, "y": 6135347.352019825}
        }, {
            "attributes": {
                "OBJECTID": 1620,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905887.0501998595, "y": 6135363.070732916}
        }, {
            "attributes": {"OBJECTID": 1621, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907347.3314877236, "y": 6133456.0775582865}
        }, {
            "attributes": {"OBJECTID": 1622, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907445.5998814127, "y": 6133480.804418634}
        }, {
            "attributes": {"OBJECTID": 1623, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907477.8925524992, "y": 6133476.835967183}
        }, {
            "attributes": {"OBJECTID": 1624, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907471.4905685864, "y": 6133490.022981593}
        }, {
            "attributes": {"OBJECTID": 1625, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907490.1376964876, "y": 6133469.409727811}
        }, {
            "attributes": {"OBJECTID": 1626, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907487.535046791, "y": 6133457.292455332}
        }, {
            "attributes": {"OBJECTID": 1627, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905939.8601662952, "y": 6135206.4590905225}
        }, {
            "attributes": {
                "OBJECTID": 1628,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.6091340915, "y": 6133675.410990547}
        }, {
            "attributes": {"OBJECTID": 1629, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907110.2376702558, "y": 6133853.511621956}
        }, {
            "attributes": {"OBJECTID": 1630, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907096.7045597625, "y": 6133838.591740583}
        }, {
            "attributes": {"OBJECTID": 1631, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907054.487756071, "y": 6133777.061690255}
        }, {
            "attributes": {
                "OBJECTID": 1632,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907039.4418137001, "y": 6133793.149680456}
        }, {
            "attributes": {
                "OBJECTID": 1633,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.4497159247, "y": 6133772.23196134}
        }, {
            "attributes": {
                "OBJECTID": 1634,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906967.641855332, "y": 6133711.139630361}
        }, {
            "attributes": {
                "OBJECTID": 1635,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906749.0370920892, "y": 6133820.035383028}
        }, {
            "attributes": {
                "OBJECTID": 1636,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906601.0689985368, "y": 6133930.58974538}
        }, {
            "attributes": {
                "OBJECTID": 1637,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906538.92934558, "y": 6133593.118365306}
        }, {
            "attributes": {"OBJECTID": 1638, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906428.1692352316, "y": 6135547.198819529}
        }, {
            "attributes": {"OBJECTID": 1639, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906527.2207615394, "y": 6133398.106475999}
        }, {
            "attributes": {
                "OBJECTID": 1640,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906519.387208972, "y": 6133277.613056725}
        }, {
            "attributes": {"OBJECTID": 1641, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906512.8316041601, "y": 6133233.770988021}
        }, {
            "attributes": {
                "OBJECTID": 1642,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906536.4602792775, "y": 6133245.852899886}
        }, {
            "attributes": {"OBJECTID": 1643, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906600.7450588213, "y": 6133289.611591368}
        }, {
            "attributes": {"OBJECTID": 1644, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906643.2724438854, "y": 6133268.386378594}
        }, {
            "attributes": {"OBJECTID": 1645, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906650.6718504422, "y": 6133263.062978658}
        }, {
            "attributes": {"OBJECTID": 1646, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906875.77433236, "y": 6133444.966598466}
        }, {
            "attributes": {"OBJECTID": 1647, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906832.424296252, "y": 6133481.436901184}
        }, {
            "attributes": {"OBJECTID": 1648, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906964.950150042, "y": 6133633.042147059}
        }, {
            "attributes": {"OBJECTID": 1649, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906981.009099785, "y": 6133645.743766291}
        }, {
            "attributes": {"OBJECTID": 1650, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907272.9266532736, "y": 6134105.531372752}
        }, {
            "attributes": {"OBJECTID": 1651, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907391.962811169, "y": 6134072.878602034}
        }, {
            "attributes": {
                "OBJECTID": 1652,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907683.6605086594, "y": 6133713.6657905225}
        }, {
            "attributes": {"OBJECTID": 1653, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907410.9962177055, "y": 6134055.157871172}
        }, {
            "attributes": {"OBJECTID": 1654, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907422.635783658, "y": 6134059.75244027}
        }, {
            "attributes": {"OBJECTID": 1655, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907353.4941347314, "y": 6134081.126481554}
        }, {
            "attributes": {"OBJECTID": 1656, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907336.290820626, "y": 6134055.461616678}
        }, {
            "attributes": {"OBJECTID": 1657, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907337.308280769, "y": 6134022.411832798}
        }, {
            "attributes": {"OBJECTID": 1658, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907328.2346290774, "y": 6134008.296077519}
        }, {
            "attributes": {"OBJECTID": 1659, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907372.5843142092, "y": 6134059.225057714}
        }, {
            "attributes": {"OBJECTID": 1660, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907370.1185874874, "y": 6134297.605285088}
        }, {
            "attributes": {"OBJECTID": 1661, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907398.999316183, "y": 6134323.813295608}
        }, {
            "attributes": {
                "OBJECTID": 1662,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907458.5296402746, "y": 6134402.983571297}
        }, {
            "attributes": {
                "OBJECTID": 1663,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.839831775, "y": 6134405.27844539}
        }, {
            "attributes": {"OBJECTID": 1664, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907833.4748359637, "y": 6134916.942240977}
        }, {
            "attributes": {"OBJECTID": 1665, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.5145493213, "y": 6134939.057835544}
        }, {
            "attributes": {"OBJECTID": 1666, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.062592191, "y": 6134961.834454023}
        }, {
            "attributes": {"OBJECTID": 1667, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908170.3888408255, "y": 6135513.787899686}
        }, {
            "attributes": {"OBJECTID": 1668, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905612.1489437353, "y": 6133508.990823574}
        }, {
            "attributes": {"OBJECTID": 1670, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910887.2745970227, "y": 6136651.843016668}
        }, {
            "attributes": {"OBJECTID": 1671, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906592.6087172388, "y": 6133175.304120575}
        }, {
            "attributes": {"OBJECTID": 1672, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906574.92227654, "y": 6133172.428847946}
        }, {
            "attributes": {"OBJECTID": 1673, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909141.435438187, "y": 6134588.688440576}
        }, {
            "attributes": {"OBJECTID": 1674, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902757.2448300745, "y": 6134846.847032911}
        }, {
            "attributes": {"OBJECTID": 1675, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902764.4883893412, "y": 6134834.4857934965}
        }, {
            "attributes": {"OBJECTID": 1676, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902679.9724055387, "y": 6134800.508333361}
        }, {
            "attributes": {
                "OBJECTID": 1677,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902794.0759967945, "y": 6134668.470369554}
        }, {
            "attributes": {
                "OBJECTID": 1678,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902809.3835399735, "y": 6134640.68405572}
        }, {
            "attributes": {"OBJECTID": 1679, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902658.5769107249, "y": 6134888.784414844}
        }, {
            "attributes": {
                "OBJECTID": 1680,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902609.4335856838, "y": 6134897.078813746}
        }, {
            "attributes": {"OBJECTID": 1681, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902794.7305554005, "y": 6134668.203321417}
        }, {
            "attributes": {
                "OBJECTID": 1682,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902775.7383370767, "y": 6134690.985895434}
        }, {
            "attributes": {"OBJECTID": 1683, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902763.9562821707, "y": 6134692.112507815}
        }, {
            "attributes": {
                "OBJECTID": 1684,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902738.2437061905, "y": 6134712.952359928}
        }, {
            "attributes": {"OBJECTID": 1685, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902928.7558827314, "y": 6134529.484624535}
        }, {
            "attributes": {
                "OBJECTID": 1686,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902933.2131151415, "y": 6134531.198712125}
        }, {
            "attributes": {
                "OBJECTID": 1687,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902945.8712544453, "y": 6134502.448151118}
        }, {
            "attributes": {"OBJECTID": 1688, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902936.7686596822, "y": 6134503.371118392}
        }, {
            "attributes": {"OBJECTID": 1689, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903029.4844371697, "y": 6134337.914550291}
        }, {
            "attributes": {"OBJECTID": 1690, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903124.5234524382, "y": 6134372.552764615}
        }, {
            "attributes": {"OBJECTID": 1691, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903101.1619441023, "y": 6134373.475717893}
        }, {
            "attributes": {
                "OBJECTID": 1692,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903176.0755086234, "y": 6134283.929685646}
        }, {
            "attributes": {"OBJECTID": 1693, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903306.2992753403, "y": 6134159.14460513}
        }, {
            "attributes": {
                "OBJECTID": 1694,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903125.9539078907, "y": 6134356.151584372}
        }, {
            "attributes": {
                "OBJECTID": 1695,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903108.6370479036, "y": 6134330.864754544}
        }, {
            "attributes": {
                "OBJECTID": 1696,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902665.4132632974, "y": 6134874.89389344}
        }, {
            "attributes": {
                "OBJECTID": 1697,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902648.0225984836, "y": 6134743.629729349}
        }, {
            "attributes": {
                "OBJECTID": 1698,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902402.0421460716, "y": 6134785.054366907}
        }, {
            "attributes": {"OBJECTID": 1699, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902387.4759907008, "y": 6134800.21123772}
        }, {
            "attributes": {"OBJECTID": 1700, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902367.5030476633, "y": 6134792.655331472}
        }, {
            "attributes": {"OBJECTID": 1701, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1901960.597692202, "y": 6135182.0033227075}
        }, {
            "attributes": {
                "OBJECTID": 1702,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902252.2417337024, "y": 6134821.815791976}
        }, {
            "attributes": {"OBJECTID": 1703, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902279.6886673518, "y": 6134816.189322536}
        }, {
            "attributes": {"OBJECTID": 1704, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902459.8525840268, "y": 6134793.676805489}
        }, {
            "attributes": {"OBJECTID": 2350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906558.831044144, "y": 6133180.804354591}
        }, {
            "attributes": {"OBJECTID": 2351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905853.8769916047, "y": 6133166.364579083}
        }, {
            "attributes": {"OBJECTID": 2352, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907415.4178278754, "y": 6135685.800637304}
        }, {
            "attributes": {
                "OBJECTID": 2353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907196.2063734136, "y": 6133563.3679844495}
        }, {
            "attributes": {
                "OBJECTID": 2354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907065.5206308044, "y": 6133668.30166154}
        }, {
            "attributes": {
                "OBJECTID": 2355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907546.3807560152, "y": 6134177.045798393}
        }, {
            "attributes": {
                "OBJECTID": 2356,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903819.111433998, "y": 6135545.524756725}
        }, {
            "attributes": {
                "OBJECTID": 2357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903750.4261949789, "y": 6135770.717437156}
        }, {
            "attributes": {
                "OBJECTID": 3357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907047.0182182423, "y": 6134141.835925885}
        }, {
            "attributes": {
                "OBJECTID": 3358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.738033407, "y": 6134184.374183202}
        }, {
            "attributes": {
                "OBJECTID": 3359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906975.8917427901, "y": 6134203.897658475}
        }, {
            "attributes": {
                "OBJECTID": 3360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906926.492605556, "y": 6134246.064044205}
        }, {
            "attributes": {
                "OBJECTID": 3361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906907.7786859581, "y": 6134210.206330721}
        }, {
            "attributes": {
                "OBJECTID": 3362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.934554625, "y": 6134212.754835351}
        }, {
            "attributes": {
                "OBJECTID": 3363,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906965.3976543956, "y": 6134176.066121831}
        }, {
            "attributes": {
                "OBJECTID": 3364,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906990.6315565712, "y": 6134155.175839216}
        }]
    };

    Map.Dataset['9261'] = {
        name: "PUB_Stanovistia_odpadove_kose_9261",
        toGeoJSON: toGeoJSON,
        features: [{
            "attributes": {
                "OBJECTID": 1,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906560.9828499057, "y": 6133157.827217198}
        }, {
            "attributes": {
                "OBJECTID": 3,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906456.0230416197, "y": 6133007.244972198}
        }, {
            "attributes": {
                "OBJECTID": 4,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907646.477015744, "y": 6134429.584120446}
        }, {
            "attributes": {
                "OBJECTID": 5,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907715.4182895925, "y": 6134490.693261866}
        }, {
            "attributes": {
                "OBJECTID": 6,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907821.748440809, "y": 6134559.178277997}
        }, {
            "attributes": {
                "OBJECTID": 7,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907841.465349017, "y": 6134647.840925626}
        }, {
            "attributes": {
                "OBJECTID": 8,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907880.0397789662, "y": 6134658.688067981}
        }, {
            "attributes": {
                "OBJECTID": 9,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907874.1053369122, "y": 6134665.229073374}
        }, {
            "attributes": {
                "OBJECTID": 10,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907884.4613891423, "y": 6134700.716493143}
        }, {
            "attributes": {
                "OBJECTID": 11,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906376.5041897618, "y": 6133093.139789345}
        }, {
            "attributes": {
                "OBJECTID": 12,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907911.3762156214, "y": 6134724.936215856}
        }, {
            "attributes": {
                "OBJECTID": 13,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907914.4263696715, "y": 6134716.39229235}
        }, {
            "attributes": {
                "OBJECTID": 15,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907928.1041955033, "y": 6134755.755498992}
        }, {
            "attributes": {
                "OBJECTID": 16,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908026.389287123, "y": 6134733.44676663}
        }, {
            "attributes": {
                "OBJECTID": 17,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908040.845236193, "y": 6134732.855918154}
        }, {
            "attributes": {
                "OBJECTID": 18,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906428.131943198, "y": 6133092.692566031}
        }, {
            "attributes": {
                "OBJECTID": 21,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906431.6084509008, "y": 6133090.064295139}
        }, {
            "attributes": {
                "OBJECTID": 22,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.8802800188, "y": 6134786.478086811}
        }, {
            "attributes": {
                "OBJECTID": 23,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907800.6812271758, "y": 6134787.356019712}
        }, {
            "attributes": {
                "OBJECTID": 24,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907774.9975942546, "y": 6134792.663676843}
        }, {
            "attributes": {
                "OBJECTID": 25,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907750.6898702492, "y": 6134744.76636305}
        }, {
            "attributes": {
                "OBJECTID": 27,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907786.0115446786, "y": 6134712.598519317}
        }, {
            "attributes": {
                "OBJECTID": 29,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907812.108172903, "y": 6134711.887500005}
        }, {
            "attributes": {
                "OBJECTID": 30,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907848.3627046647, "y": 6134703.1115905065}
        }, {
            "attributes": {
                "OBJECTID": 31,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.5197215707, "y": 6134917.242678862}
        }, {
            "attributes": {
                "OBJECTID": 32,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.0865720527, "y": 6134716.357242085}
        }, {
            "attributes": {
                "OBJECTID": 33,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907729.6905615025, "y": 6134742.660002332}
        }, {
            "attributes": {
                "OBJECTID": 34,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 3,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906500.4818198502, "y": 6133053.246893748}
        }, {
            "attributes": {
                "OBJECTID": 35,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907662.1597056075, "y": 6134667.57242023}
        }, {
            "attributes": {
                "OBJECTID": 36,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907449.1131245452, "y": 6135096.707794487}
        }, {
            "attributes": {
                "OBJECTID": 37,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906528.3573335435, "y": 6133146.805088411}
        }, {
            "attributes": {
                "OBJECTID": 38,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.151231805, "y": 6135099.478557988}
        }, {
            "attributes": {
                "OBJECTID": 40,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907412.9632331051, "y": 6135158.646256893}
        }, {
            "attributes": {
                "OBJECTID": 42,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907421.7775103862, "y": 6135422.954670598}
        }, {
            "attributes": {
                "OBJECTID": 43,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907308.720322339, "y": 6135500.140402958}
        }, {
            "attributes": {
                "OBJECTID": 44,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907577.3298008451, "y": 6135856.473059273}
        }, {
            "attributes": {
                "OBJECTID": 47,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905712.2273923503, "y": 6133475.442503791}
        }, {
            "attributes": {
                "OBJECTID": 48,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905669.2024091596, "y": 6133419.392087442}
        }, {
            "attributes": {
                "OBJECTID": 49,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905661.8308324786, "y": 6133420.176426934}
        }, {
            "attributes": {
                "OBJECTID": 50,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.0137016822, "y": 6133176.200244628}
        }, {
            "attributes": {
                "OBJECTID": 51,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905779.9152087253, "y": 6133185.002957936}
        }, {
            "attributes": {
                "OBJECTID": 52,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.2096239834, "y": 6133185.243259624}
        }, {
            "attributes": {
                "OBJECTID": 53,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4687077007, "y": 6133189.029680803}
        }, {
            "attributes": {
                "OBJECTID": 54,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905791.541416347, "y": 6133195.754796161}
        }, {
            "attributes": {
                "OBJECTID": 55,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.839692301, "y": 6133202.311371518}
        }, {
            "attributes": {
                "OBJECTID": 56,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905769.2162924698, "y": 6133220.0303371465}
        }, {
            "attributes": {
                "OBJECTID": 57,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905786.3194190299, "y": 6133250.383621233}
        }, {
            "attributes": {
                "OBJECTID": 58,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905789.408534901, "y": 6133301.973937828}
        }, {
            "attributes": {
                "OBJECTID": 59,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905760.1994137128, "y": 6133306.951923367}
        }, {
            "attributes": {
                "OBJECTID": 60,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905717.122110358, "y": 6133294.487773948}
        }, {
            "attributes": {
                "OBJECTID": 61,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905700.78708828, "y": 6133277.319351502}
        }, {
            "attributes": {
                "OBJECTID": 62,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905687.9641961385, "y": 6133270.577484287}
        }, {
            "attributes": {
                "OBJECTID": 63,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905701.0631606213, "y": 6133254.880969473}
        }, {
            "attributes": {
                "OBJECTID": 64,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905726.2247051212, "y": 6133242.992622522}
        }, {
            "attributes": {
                "OBJECTID": 65,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906468.336090494, "y": 6132973.329831266}
        }, {
            "attributes": {
                "OBJECTID": 67,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906136.028486164, "y": 6132947.676630723}
        }, {
            "attributes": {
                "OBJECTID": 68,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.8995363861, "y": 6133191.144003098}
        }, {
            "attributes": {
                "OBJECTID": 69,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906323.5149989496, "y": 6133347.712104884}
        }, {
            "attributes": {
                "OBJECTID": 70,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906259.6732709762, "y": 6133332.7163406145}
        }, {
            "attributes": {
                "OBJECTID": 71,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.8993380351, "y": 6133335.765221341}
        }, {
            "attributes": {
                "OBJECTID": 72,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906181.126238272, "y": 6133341.532565195}
        }, {
            "attributes": {
                "OBJECTID": 73,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906152.0106254548, "y": 6133351.797312073}
        }, {
            "attributes": {
                "OBJECTID": 74,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906097.7846751055, "y": 6133379.9382346915}
        }, {
            "attributes": {
                "OBJECTID": 75,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0724219524, "y": 6133772.077423403}
        }, {
            "attributes": {
                "OBJECTID": 76,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905804.5524384317, "y": 6133192.041797571}
        }, {
            "attributes": {
                "OBJECTID": 77,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905851.459132264, "y": 6133286.92652144}
        }, {
            "attributes": {
                "OBJECTID": 78,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905889.343381373, "y": 6133344.828430389}
        }, {
            "attributes": {
                "OBJECTID": 79,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905894.1245534986, "y": 6133361.584795577}
        }, {
            "attributes": {
                "OBJECTID": 80,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905955.6385909207, "y": 6133472.143250674}
        }, {
            "attributes": {
                "OBJECTID": 81,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905973.7458192932, "y": 6133518.38297485}
        }, {
            "attributes": {
                "OBJECTID": 82,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906596.985799615, "y": 6135773.156234862}
        }, {
            "attributes": {
                "OBJECTID": 83,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905992.9417522824, "y": 6133537.926626156}
        }, {
            "attributes": {
                "OBJECTID": 84,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906580.9179443119, "y": 6135793.152399067}
        }, {
            "attributes": {
                "OBJECTID": 85,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905998.240560046, "y": 6133552.385385543}
        }, {
            "attributes": {
                "OBJECTID": 86,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906571.4145993867, "y": 6135812.070258994}
        }, {
            "attributes": {
                "OBJECTID": 87,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906575.9686797545, "y": 6135834.141426641}
        }, {
            "attributes": {
                "OBJECTID": 88,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906088.5885719655, "y": 6133703.991887836}
        }, {
            "attributes": {
                "OBJECTID": 89,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906582.7636214716, "y": 6135884.895980203}
        }, {
            "attributes": {
                "OBJECTID": 90,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906604.0512476943, "y": 6135966.319232119}
        }, {
            "attributes": {
                "OBJECTID": 91,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905885.1009955795, "y": 6133558.955584718}
        }, {
            "attributes": {
                "OBJECTID": 92,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906595.8347560787, "y": 6136037.608823871}
        }, {
            "attributes": {
                "OBJECTID": 93,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905879.1932701997, "y": 6133530.638846611}
        }, {
            "attributes": {
                "OBJECTID": 94,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906546.0805096717, "y": 6136139.701574597}
        }, {
            "attributes": {
                "OBJECTID": 95,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905846.472019075, "y": 6133480.772711071}
        }, {
            "attributes": {
                "OBJECTID": 96,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905782.1905791187, "y": 6133386.631792789}
        }, {
            "attributes": {
                "OBJECTID": 97,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906437.8534743334, "y": 6136158.595160377}
        }, {
            "attributes": {
                "OBJECTID": 98,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906460.7474408108, "y": 6136176.447116566}
        }, {
            "attributes": {
                "OBJECTID": 99,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905801.9642602676, "y": 6133485.727437082}
        }, {
            "attributes": {
                "OBJECTID": 100,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905843.32946985, "y": 6133634.8228091365}
        }, {
            "attributes": {
                "OBJECTID": 101,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905912.9531321742, "y": 6133739.46364099}
        }, {
            "attributes": {
                "OBJECTID": 102,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905871.359717632, "y": 6133759.67534645}
        }, {
            "attributes": {
                "OBJECTID": 103,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906412.3924804, "y": 6135836.433345888}
        }, {
            "attributes": {
                "OBJECTID": 104,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905860.5327839616, "y": 6133742.65285168}
        }, {
            "attributes": {
                "OBJECTID": 105,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906400.4100504096, "y": 6135817.717414381}
        }, {
            "attributes": {
                "OBJECTID": 106,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905834.4027598826, "y": 6133659.882287752}
        }, {
            "attributes": {
                "OBJECTID": 107,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906501.7085606437, "y": 6135786.602185356}
        }, {
            "attributes": {
                "OBJECTID": 108,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4041424014, "y": 6133685.817990802}
        }, {
            "attributes": {
                "OBJECTID": 109,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906483.2428835048, "y": 6135714.989179464}
        }, {
            "attributes": {
                "OBJECTID": 110,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906522.9182632242, "y": 6135738.654239509}
        }, {
            "attributes": {
                "OBJECTID": 111,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905772.1172783978, "y": 6133546.158970819}
        }, {
            "attributes": {
                "OBJECTID": 112,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906496.5143932023, "y": 6135743.703751165}
        }, {
            "attributes": {
                "OBJECTID": 113,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.8096360397, "y": 6133555.686338421}
        }, {
            "attributes": {
                "OBJECTID": 114,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905666.960434615, "y": 6133646.715037914}
        }, {
            "attributes": {
                "OBJECTID": 115,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905659.6901586684, "y": 6133761.617915645}
        }, {
            "attributes": {
                "OBJECTID": 116,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905748.2681906915, "y": 6133785.891723458}
        }, {
            "attributes": {
                "OBJECTID": 117,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905837.378329872, "y": 6133855.63278393}
        }, {
            "attributes": {
                "OBJECTID": 118,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906741.6655154082, "y": 6135782.570901889}
        }, {
            "attributes": {"OBJECTID": 119, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906810.6858260944, "y": 6135761.683375359}
        }, {
            "attributes": {
                "OBJECTID": 120,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.260376592, "y": 6135714.578542763}
        }, {
            "attributes": {
                "OBJECTID": 121,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.13278112, "y": 6135721.75300317}
        }, {
            "attributes": {
                "OBJECTID": 122,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906867.4587663948, "y": 6135764.01700682}
        }, {
            "attributes": {
                "OBJECTID": 123,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906904.852096546, "y": 6135779.941805}
        }, {
            "attributes": {
                "OBJECTID": 124,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906997.458780941, "y": 6135708.802922888}
        }, {
            "attributes": {"OBJECTID": 125, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907041.6325812768, "y": 6135657.688856835}
        }, {
            "attributes": {
                "OBJECTID": 126,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0596261825, "y": 6135627.201842946}
        }, {
            "attributes": {
                "OBJECTID": 127,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907064.9039208235, "y": 6135601.023226205}
        }, {
            "attributes": {
                "OBJECTID": 128,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907093.6243494516, "y": 6135582.047409704}
        }, {
            "attributes": {
                "OBJECTID": 129,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907128.9527030494, "y": 6135555.60853213}
        }, {
            "attributes": {
                "OBJECTID": 130,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.1153218506, "y": 6135579.082859484}
        }, {
            "attributes": {
                "OBJECTID": 131,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907174.481261587, "y": 6135587.567551837}
        }, {
            "attributes": {"OBJECTID": 132, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907361.2185942, "y": 6135472.815429038}
        }, {
            "attributes": {
                "OBJECTID": 133,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907266.4267082072, "y": 6135385.840133711}
        }, {
            "attributes": {
                "OBJECTID": 134,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907227.2277759132, "y": 6135308.5135520995}
        }, {
            "attributes": {
                "OBJECTID": 135,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.4883665496, "y": 6135182.897320038}
        }, {
            "attributes": {
                "OBJECTID": 136,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907303.5105701755, "y": 6135176.669719245}
        }, {
            "attributes": {
                "OBJECTID": 137,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.1983651738, "y": 6135182.510076971}
        }, {
            "attributes": {
                "OBJECTID": 139,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907341.7120798256, "y": 6135216.7527803695}
        }, {
            "attributes": {
                "OBJECTID": 140,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907583.5035798044, "y": 6135322.107329599}
        }, {
            "attributes": {
                "OBJECTID": 141,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.7468133282, "y": 6135231.474764664}
        }, {
            "attributes": {
                "OBJECTID": 142,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907831.5657067003, "y": 6135171.860899544}
        }, {
            "attributes": {
                "OBJECTID": 143,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907864.1967890353, "y": 6135147.5147264525}
        }, {
            "attributes": {"OBJECTID": 144, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907984.9951344694, "y": 6135239.777173777}
        }, {
            "attributes": {"OBJECTID": 145, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908064.1633299312, "y": 6135386.546201428}
        }, {
            "attributes": {"OBJECTID": 146, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908130.7446305694, "y": 6135487.708113231}
        }, {
            "attributes": {"OBJECTID": 147, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907891.53351639, "y": 6135123.025076605}
        }, {
            "attributes": {
                "OBJECTID": 148,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907856.6448747816, "y": 6135051.726410447}
        }, {
            "attributes": {
                "OBJECTID": 150,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907748.3321234307, "y": 6134877.857031423}
        }, {
            "attributes": {
                "OBJECTID": 152,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907642.1589327005, "y": 6134737.709555971}
        }, {
            "attributes": {"OBJECTID": 153, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906746.9565308073, "y": 6135229.319878531}
        }, {
            "attributes": {"OBJECTID": 154, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906744.7902535193, "y": 6135232.501298524}
        }, {
            "attributes": {
                "OBJECTID": 155,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906750.1636453376, "y": 6135211.590076912}
        }, {
            "attributes": {
                "OBJECTID": 156,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906735.1277217162, "y": 6135108.540296236}
        }, {
            "attributes": {"OBJECTID": 157, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906710.4604357486, "y": 6135003.361963634}
        }, {
            "attributes": {
                "OBJECTID": 158,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905497.435321667, "y": 6133248.65643989}
        }, {
            "attributes": {
                "OBJECTID": 159,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905293.2316269958, "y": 6133591.755422778}
        }, {
            "attributes": {
                "OBJECTID": 160,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905248.0547267254, "y": 6133584.603607826}
        }, {
            "attributes": {"OBJECTID": 161, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907759.278168962, "y": 6135468.582319318}
        }, {
            "attributes": {
                "OBJECTID": 162,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905519.2828849296, "y": 6133181.386752148}
        }, {
            "attributes": {
                "OBJECTID": 163,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905558.9783021545, "y": 6133156.438812004}
        }, {
            "attributes": {
                "OBJECTID": 164,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905587.6575425698, "y": 6133157.308233975}
        }, {
            "attributes": {
                "OBJECTID": 165,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905616.4091406483, "y": 6133148.971131676}
        }, {
            "attributes": {
                "OBJECTID": 166,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905692.951309321, "y": 6133198.176172728}
        }, {
            "attributes": {
                "OBJECTID": 167,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905546.161977863, "y": 6133527.85273696}
        }, {
            "attributes": {
                "OBJECTID": 168,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907872.9620857395, "y": 6135576.9429088915}
        }, {
            "attributes": {
                "OBJECTID": 169,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905648.324438659, "y": 6133249.911358091}
        }, {
            "attributes": {
                "OBJECTID": 170,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905612.8001627605, "y": 6133219.699920983}
        }, {
            "attributes": {
                "OBJECTID": 171,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905604.09720497, "y": 6133233.770988021}
        }, {
            "attributes": {
                "OBJECTID": 172,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905603.225573355, "y": 6133259.525172384}
        }, {
            "attributes": {
                "OBJECTID": 173,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905570.4709263826, "y": 6133246.450320832}
        }, {
            "attributes": {
                "OBJECTID": 174,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 175,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 176,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905527.4604147242, "y": 6133304.098300724}
        }, {
            "attributes": {"OBJECTID": 178, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907618.6226527581, "y": 6136041.5851399405}
        }, {
            "attributes": {"OBJECTID": 179, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907445.390600775, "y": 6136130.805678224}
        }, {
            "attributes": {"OBJECTID": 180, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906944.3482518822, "y": 6136350.162583382}
        }, {
            "attributes": {
                "OBJECTID": 181,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906887.1912593313, "y": 6135896.308910409}
        }, {
            "attributes": {
                "OBJECTID": 182,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906894.473780419, "y": 6135916.91131614}
        }, {
            "attributes": {
                "OBJECTID": 183,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907202.3823787584, "y": 6135633.828719667}
        }, {
            "attributes": {"OBJECTID": 184, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907439.1856523587, "y": 6135991.046667373}
        }, {
            "attributes": {"OBJECTID": 185, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907529.1162161857, "y": 6135583.663223543}
        }, {
            "attributes": {
                "OBJECTID": 186,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907804.006340365, "y": 6135668.924544019}
        }, {
            "attributes": {
                "OBJECTID": 187,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907815.7961876353, "y": 6135676.699895229}
        }, {
            "attributes": {
                "OBJECTID": 190,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907829.342656465, "y": 6135649.918530623}
        }, {
            "attributes": {
                "OBJECTID": 192,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907397.7759149764, "y": 6134282.636229421}
        }, {
            "attributes": {
                "OBJECTID": 193,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907416.7748124688, "y": 6134278.6173370145}
        }, {
            "attributes": {
                "OBJECTID": 194,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907428.3320020025, "y": 6134217.224316813}
        }, {
            "attributes": {
                "OBJECTID": 195,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907438.7414875864, "y": 6134211.084204533}
        }, {
            "attributes": {
                "OBJECTID": 196,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907462.296691838, "y": 6134200.134153838}
        }, {
            "attributes": {
                "OBJECTID": 197,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907483.4963756693, "y": 6134182.596744726}
        }, {
            "attributes": {
                "OBJECTID": 198,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907492.7503649334, "y": 6134206.567995368}
        }, {
            "attributes": {
                "OBJECTID": 199,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907527.1035597967, "y": 6134241.025429731}
        }, {
            "attributes": {
                "OBJECTID": 200,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907470.1970361024, "y": 6134224.899880601}
        }, {
            "attributes": {
                "OBJECTID": 201,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907461.9682993393, "y": 6134241.4593613045}
        }, {
            "attributes": {
                "OBJECTID": 202,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907443.0295143751, "y": 6134254.071758889}
        }, {
            "attributes": {
                "OBJECTID": 203,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907098.4489361814, "y": 6133863.529986417}
        }, {
            "attributes": {
                "OBJECTID": 204,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907270.0913458404, "y": 6133756.808221914}
        }, {
            "attributes": {
                "OBJECTID": 205,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907358.6649250803, "y": 6133600.065754151}
        }, {
            "attributes": {
                "OBJECTID": 206,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.006687113, "y": 6133593.433442532}
        }, {
            "attributes": {
                "OBJECTID": 207,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906925.9148574024, "y": 6135151.806097471}
        }, {
            "attributes": {
                "OBJECTID": 209,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906898.4489994373, "y": 6135164.686900031}
        }, {
            "attributes": {
                "OBJECTID": 210,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.6340761255, "y": 6133959.782483528}
        }, {
            "attributes": {
                "OBJECTID": 211,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907218.6995897226, "y": 6133542.709495614}
        }, {
            "attributes": {
                "OBJECTID": 214,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907243.3702152714, "y": 6133282.314010506}
        }, {
            "attributes": {
                "OBJECTID": 215,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907250.7328863922, "y": 6133302.387796385}
        }, {
            "attributes": {
                "OBJECTID": 216,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906783.1231201715, "y": 6135294.303871372}
        }, {
            "attributes": {
                "OBJECTID": 218,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906824.2556720169, "y": 6135259.69531034}
        }, {
            "attributes": {
                "OBJECTID": 219,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907327.297318962, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 220,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.7252739812, "y": 6135307.007955775}
        }, {
            "attributes": {
                "OBJECTID": 222,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906932.012939105, "y": 6135331.387966124}
        }, {
            "attributes": {
                "OBJECTID": 223,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906124.8497828958, "y": 6134696.311852438}
        }, {
            "attributes": {
                "OBJECTID": 224,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906916.8334133404, "y": 6135331.828629688}
        }, {
            "attributes": {
                "OBJECTID": 225,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906163.724775474, "y": 6134730.994912638}
        }, {
            "attributes": {
                "OBJECTID": 226,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906930.386561345, "y": 6135345.627753703}
        }, {
            "attributes": {
                "OBJECTID": 227,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906929.048501067, "y": 6135367.035051325}
        }, {
            "attributes": {
                "OBJECTID": 229,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0050796329, "y": 6133327.906887838}
        }, {
            "attributes": {
                "OBJECTID": 230,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906808.2278917367, "y": 6135478.664334871}
        }, {
            "attributes": {
                "OBJECTID": 231,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906285.8834450825, "y": 6134777.45674723}
        }, {
            "attributes": {
                "OBJECTID": 232,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907082.3833072695, "y": 6133470.876618177}
        }, {
            "attributes": {
                "OBJECTID": 233,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906238.9934491746, "y": 6134782.579131111}
        }, {
            "attributes": {
                "OBJECTID": 234,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907141.4416367193, "y": 6133405.240612703}
        }, {
            "attributes": {
                "OBJECTID": 235,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907108.9679601442, "y": 6133409.968170566}
        }, {
            "attributes": {
                "OBJECTID": 236,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906998.839142627, "y": 6135537.040106047}
        }, {
            "attributes": {
                "OBJECTID": 237,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907084.4841286999, "y": 6133407.579609558}
        }, {
            "attributes": {
                "OBJECTID": 238,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906235.5636956634, "y": 6134717.622389816}
        }, {
            "attributes": {
                "OBJECTID": 239,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906977.0049377014, "y": 6135542.550203828}
        }, {
            "attributes": {
                "OBJECTID": 240,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906959.2828747688, "y": 6135585.821537337}
        }, {
            "attributes": {
                "OBJECTID": 241,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906182.8138417562, "y": 6134735.975398264}
        }, {
            "attributes": {
                "OBJECTID": 242,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906942.584951148, "y": 6135596.669868377}
        }, {
            "attributes": {
                "OBJECTID": 243,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.6280587597, "y": 6134722.437630584}
        }, {
            "attributes": {
                "OBJECTID": 244,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906903.8691454474, "y": 6135599.172047316}
        }, {
            "attributes": {
                "OBJECTID": 245,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906200.3911893498, "y": 6134625.310491835}
        }, {
            "attributes": {
                "OBJECTID": 247,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906279.8710793862, "y": 6134595.785181681}
        }, {
            "attributes": {
                "OBJECTID": 248,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906330.7685769657, "y": 6134693.991864491}
        }, {
            "attributes": {
                "OBJECTID": 250,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906426.239511859, "y": 6134918.412717605}
        }, {
            "attributes": {
                "OBJECTID": 251,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906713.7009461273, "y": 6137049.766073912}
        }, {
            "attributes": {
                "OBJECTID": 252,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906357.4006519476, "y": 6134635.658561328}
        }, {
            "attributes": {
                "OBJECTID": 254,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907261.9661362097, "y": 6134934.314244338}
        }, {
            "attributes": {
                "OBJECTID": 255,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907061.684561152, "y": 6133558.022706246}
        }, {
            "attributes": {
                "OBJECTID": 257,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907155.4244779577, "y": 6133633.741394827}
        }, {
            "attributes": {
                "OBJECTID": 258,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906515.113653722, "y": 6134709.809521383}
        }, {
            "attributes": {
                "OBJECTID": 259,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907404.9471165736, "y": 6134828.777530707}
        }, {
            "attributes": {
                "OBJECTID": 260,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906474.230457531, "y": 6134671.312763659}
        }, {
            "attributes": {
                "OBJECTID": 261,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.4669114826, "y": 6134801.351217088}
        }, {
            "attributes": {
                "OBJECTID": 262,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907489.5298920665, "y": 6134815.782067106}
        }, {
            "attributes": {"OBJECTID": 263, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906494.343663131, "y": 6134623.412790773}
        }, {
            "attributes": {
                "OBJECTID": 264,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907002.439214955, "y": 6133632.401309067}
        }, {
            "attributes": {
                "OBJECTID": 265,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906881.4082117847, "y": 6133364.375023093}
        }, {
            "attributes": {
                "OBJECTID": 266,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906878.7654870776, "y": 6133357.804973257}
        }, {
            "attributes": {
                "OBJECTID": 267,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906858.7335447075, "y": 6133331.408008984}
        }, {
            "attributes": {
                "OBJECTID": 268,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906857.6069914591, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 269,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906839.1958608762, "y": 6133306.835108379}
        }, {
            "attributes": {
                "OBJECTID": 270,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906885.807558064, "y": 6133332.19567801}
        }, {
            "attributes": {
                "OBJECTID": 271,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906341.568793962, "y": 6134184.148874081}
        }, {
            "attributes": {
                "OBJECTID": 272,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906240.8458055027, "y": 6134243.305239685}
        }, {
            "attributes": {
                "OBJECTID": 273,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906611.289240988, "y": 6133728.605981251}
        }, {
            "attributes": {
                "OBJECTID": 274,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906257.9856674985, "y": 6134261.473644381}
        }, {
            "attributes": {
                "OBJECTID": 275,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906606.4924841279, "y": 6133714.28043343}
        }, {
            "attributes": {
                "OBJECTID": 276,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906272.658689577, "y": 6134249.328547244}
        }, {
            "attributes": {
                "OBJECTID": 277,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906322.3912286905, "y": 6134071.191976742}
        }, {
            "attributes": {
                "OBJECTID": 278,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906292.777461149, "y": 6134288.335783156}
        }, {
            "attributes": {
                "OBJECTID": 280,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906289.5447431349, "y": 6134293.983602368}
        }, {
            "attributes": {
                "OBJECTID": 282,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906315.0179822159, "y": 6134350.530427965}
        }, {
            "attributes": {
                "OBJECTID": 283,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906324.766230025, "y": 6134342.868103432}
        }, {
            "attributes": {
                "OBJECTID": 284,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906306.3528730506, "y": 6134443.448550367}
        }, {
            "attributes": {
                "OBJECTID": 285,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906015.5017602881, "y": 6134271.30472677}
        }, {
            "attributes": {
                "OBJECTID": 286,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906884.470610982, "y": 6133865.520977125}
        }, {
            "attributes": {
                "OBJECTID": 287,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906793.7763954375, "y": 6133941.070487846}
        }, {
            "attributes": {
                "OBJECTID": 288,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906214.3205972344, "y": 6134337.337081016}
        }, {
            "attributes": {
                "OBJECTID": 289,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906569.3841318712, "y": 6134001.880743126}
        }, {
            "attributes": {
                "OBJECTID": 290,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906641.476860498, "y": 6134204.942427686}
        }, {
            "attributes": {
                "OBJECTID": 291,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906646.5263126008, "y": 6134234.992114218}
        }, {
            "attributes": {
                "OBJECTID": 293,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906670.6381143113, "y": 6134252.963562831}
        }, {
            "attributes": {
                "OBJECTID": 294,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906672.5116213406, "y": 6134236.984860286}
        }, {
            "attributes": {
                "OBJECTID": 295,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906701.2220312066, "y": 6134225.198625232}
        }, {
            "attributes": {
                "OBJECTID": 297,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906216.3811210108, "y": 6134438.957253705}
        }, {
            "attributes": {
                "OBJECTID": 298,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.6415111914, "y": 6133975.334928264}
        }, {
            "attributes": {
                "OBJECTID": 299,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906230.7680519987, "y": 6134486.682616858}
        }, {
            "attributes": {
                "OBJECTID": 300,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907012.8698512467, "y": 6134003.135771743}
        }, {
            "attributes": {
                "OBJECTID": 302,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907000.916364322, "y": 6134046.592920031}
        }, {
            "attributes": {
                "OBJECTID": 304,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906156.8641552562, "y": 6134537.604429045}
        }, {
            "attributes": {
                "OBJECTID": 305,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907035.7894212017, "y": 6134129.914637219}
        }, {
            "attributes": {
                "OBJECTID": 306,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907059.290078904, "y": 6134122.134015094}
        }, {
            "attributes": {
                "OBJECTID": 307,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906046.097922331, "y": 6134429.866182182}
        }, {
            "attributes": {
                "OBJECTID": 309,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906069.3358660352, "y": 6134415.622910897}
        }, {
            "attributes": {
                "OBJECTID": 310,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907106.5329576058, "y": 6134155.070695309}
        }, {
            "attributes": {
                "OBJECTID": 311,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907167.741979615, "y": 6134108.146603881}
        }, {
            "attributes": {
                "OBJECTID": 312,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907173.686440425, "y": 6134094.808432774}
        }, {
            "attributes": {
                "OBJECTID": 313,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905962.716284141, "y": 6134358.117654796}
        }, {
            "attributes": {
                "OBJECTID": 314,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907179.438318515, "y": 6134089.164082843}
        }, {
            "attributes": {
                "OBJECTID": 315,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907188.0900693368, "y": 6134077.146069259}
        }, {
            "attributes": {
                "OBJECTID": 316,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905916.2448495151, "y": 6134318.535970863}
        }, {
            "attributes": {
                "OBJECTID": 317,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.068567665, "y": 6134082.401549034}
        }, {
            "attributes": {
                "OBJECTID": 318,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905888.5173907478, "y": 6134298.403056877}
        }, {
            "attributes": {
                "OBJECTID": 319,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907150.5030432697, "y": 6134094.501348002}
        }, {
            "attributes": {
                "OBJECTID": 320,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907204.9516326063, "y": 6134078.995250095}
        }, {
            "attributes": {
                "OBJECTID": 321,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0459279153, "y": 6134249.665679012}
        }, {
            "attributes": {
                "OBJECTID": 322,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905954.5376411567, "y": 6134179.789560949}
        }, {
            "attributes": {
                "OBJECTID": 323,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907336.0960115148, "y": 6134150.990111642}
        }, {
            "attributes": {
                "OBJECTID": 324,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905968.5616706077, "y": 6134157.120167109}
        }, {
            "attributes": {
                "OBJECTID": 326,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907385.1812277888, "y": 6134116.900207198}
        }, {
            "attributes": {
                "OBJECTID": 329,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906008.651158826, "y": 6134122.5529201375}
        }, {
            "attributes": {
                "OBJECTID": 330,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906020.9619813086, "y": 6134105.81843063}
        }, {
            "attributes": {
                "OBJECTID": 331,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906036.5322384853, "y": 6134141.17669137}
        }, {
            "attributes": {
                "OBJECTID": 332,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906031.5095030628, "y": 6134153.471840617}
        }, {
            "attributes": {
                "OBJECTID": 333,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906043.8225519375, "y": 6134199.947230371}
        }, {
            "attributes": {
                "OBJECTID": 334,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906049.8237856883, "y": 6134262.646931442}
        }, {
            "attributes": {
                "OBJECTID": 335,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906090.5689457082, "y": 6134303.919033328}
        }, {
            "attributes": {
                "OBJECTID": 336,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.7793113354, "y": 6134309.394957787}
        }, {
            "attributes": {
                "OBJECTID": 337,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906066.9925907555, "y": 6134079.327368352}
        }, {
            "attributes": {
                "OBJECTID": 338,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906059.9638781059, "y": 6134023.146159797}
        }, {
            "attributes": {
                "OBJECTID": 339,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905773.6910020383, "y": 6134301.15103078}
        }, {
            "attributes": {
                "OBJECTID": 340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906158.7499074328, "y": 6133923.748898265}
        }, {
            "attributes": {
                "OBJECTID": 341,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906178.0983481251, "y": 6133936.018701617}
        }, {
            "attributes": {
                "OBJECTID": 342,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.9920734921, "y": 6133947.51748596}
        }, {
            "attributes": {
                "OBJECTID": 343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.0021029364, "y": 6134014.556206834}
        }, {
            "attributes": {
                "OBJECTID": 344,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906801.247046468, "y": 6135170.4704985265}
        }, {
            "attributes": {"OBJECTID": 345, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907848.8402652794, "y": 6135014.176174133}
        }, {
            "attributes": {"OBJECTID": 346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.2130650233, "y": 6135013.4267400615}
        }, {
            "attributes": {
                "OBJECTID": 347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906399.385911092, "y": 6132915.121723553}
        }, {
            "attributes": {
                "OBJECTID": 348,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906491.7187495374, "y": 6133016.828476875}
        }, {
            "attributes": {"OBJECTID": 349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906536.2075840354, "y": 6133104.368773531}
        }, {
            "attributes": {"OBJECTID": 350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906565.3298760212, "y": 6133154.167635243}
        }, {
            "attributes": {
                "OBJECTID": 351,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906485.8844950222, "y": 6133159.943200547}
        }, {
            "attributes": {"OBJECTID": 353, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905999.9448614477, "y": 6133175.073831727}
        }, {
            "attributes": {"OBJECTID": 354, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905885.5484999334, "y": 6133224.651158371}
        }, {
            "attributes": {"OBJECTID": 356, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907840.3343429922, "y": 6135150.92311975}
        }, {
            "attributes": {"OBJECTID": 357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905774.2123112124, "y": 6133163.778004506}
        }, {
            "attributes": {"OBJECTID": 358, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907843.8898875266, "y": 6135165.57154832}
        }, {
            "attributes": {
                "OBJECTID": 359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905966.8651615635, "y": 6134033.423406463}
        }, {
            "attributes": {
                "OBJECTID": 360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905985.8295500178, "y": 6134041.72465369}
        }, {
            "attributes": {
                "OBJECTID": 361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905870.0851094637, "y": 6133872.007971832}
        }, {
            "attributes": {"OBJECTID": 363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906858.7680537517, "y": 6135709.554087101}
        }, {
            "attributes": {"OBJECTID": 364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906827.7689151494, "y": 6135670.728999089}
        }, {
            "attributes": {
                "OBJECTID": 366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906070.799717336, "y": 6133845.282319519}
        }, {
            "attributes": {
                "OBJECTID": 367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910120.8412387487, "y": 6135953.935843512}
        }, {
            "attributes": {
                "OBJECTID": 368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906065.837094442, "y": 6133848.002611272}
        }, {
            "attributes": {
                "OBJECTID": 369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909934.4120384865, "y": 6136045.222586026}
        }, {
            "attributes": {"OBJECTID": 370, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906794.03688305, "y": 6135325.327175188}
        }, {
            "attributes": {
                "OBJECTID": 371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905995.7792861008, "y": 6133860.102078953}
        }, {
            "attributes": {
                "OBJECTID": 372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910014.880445601, "y": 6136065.760246598}
        }, {
            "attributes": {"OBJECTID": 373, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906804.5710464614, "y": 6135296.31188661}
        }, {
            "attributes": {
                "OBJECTID": 375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910059.0768437947, "y": 6136019.056879912}
        }, {
            "attributes": {
                "OBJECTID": 377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910132.6074862834, "y": 6135966.526225806}
        }, {
            "attributes": {
                "OBJECTID": 378,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910083.1014823418, "y": 6135959.959186392}
        }, {
            "attributes": {
                "OBJECTID": 379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910094.3647884205, "y": 6135969.744644521}
        }, {
            "attributes": {"OBJECTID": 380, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906795.7434108434, "y": 6135243.000326736}
        }, {
            "attributes": {"OBJECTID": 381, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906160.2749844515, "y": 6133796.644316355}
        }, {
            "attributes": {
                "OBJECTID": 382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910006.2676565996, "y": 6135914.218744822}
        }, {
            "attributes": {"OBJECTID": 383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906769.20707063, "y": 6135220.9941113405}
        }, {
            "attributes": {"OBJECTID": 385, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906014.7848627681, "y": 6133559.035688775}
        }, {
            "attributes": {"OBJECTID": 386, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906598.8860233244, "y": 6135105.091860547}
        }, {
            "attributes": {"OBJECTID": 387, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906612.6417727985, "y": 6135142.161782422}
        }, {
            "attributes": {"OBJECTID": 388, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906561.3312799102, "y": 6135250.072572857}
        }, {
            "attributes": {"OBJECTID": 389, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906010.336535912, "y": 6133448.260834667}
        }, {
            "attributes": {"OBJECTID": 390, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905960.3796880296, "y": 6133355.435284176}
        }, {
            "attributes": {"OBJECTID": 391, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906580.5583823624, "y": 6135729.86893096}
        }, {
            "attributes": {
                "OBJECTID": 392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906859.6085159031, "y": 6137216.622397439}
        }, {
            "attributes": {"OBJECTID": 393, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906142.7377118748, "y": 6133695.469009558}
        }, {
            "attributes": {"OBJECTID": 394, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906632.3876240782, "y": 6135810.39597746}
        }, {
            "attributes": {"OBJECTID": 396, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906619.653787524, "y": 6135778.018808932}
        }, {
            "attributes": {
                "OBJECTID": 397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906860.7662386084, "y": 6137238.151243906}
        }, {
            "attributes": {"OBJECTID": 398, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906168.1653099603, "y": 6133792.442075281}
        }, {
            "attributes": {"OBJECTID": 399, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906202.4717506317, "y": 6133846.3637605505}
        }, {
            "attributes": {"OBJECTID": 400, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906621.2779388987, "y": 6135731.180967732}
        }, {
            "attributes": {"OBJECTID": 401, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906206.9000399762, "y": 6133862.607088116}
        }, {
            "attributes": {"OBJECTID": 402, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906236.8182663263, "y": 6133900.809820434}
        }, {
            "attributes": {"OBJECTID": 403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906624.413808955, "y": 6135907.524879314}
        }, {
            "attributes": {
                "OBJECTID": 404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906770.481010882, "y": 6137270.244268141}
        }, {
            "attributes": {"OBJECTID": 405, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906256.1945368883, "y": 6133940.878563307}
        }, {
            "attributes": {
                "OBJECTID": 406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906787.8820284002, "y": 6137212.496444865}
        }, {
            "attributes": {"OBJECTID": 407, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906696.8983821901, "y": 6136505.417891464}
        }, {
            "attributes": {
                "OBJECTID": 408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906727.4879763827, "y": 6137189.626853192}
        }, {
            "attributes": {"OBJECTID": 410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906676.3922187868, "y": 6136409.190352738}
        }, {
            "attributes": {
                "OBJECTID": 411,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906717.9237396885, "y": 6137095.055301927}
        }, {
            "attributes": {
                "OBJECTID": 413,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906794.406352437, "y": 6137063.648271751}
        }, {
            "attributes": {"OBJECTID": 1339, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906616.923120419, "y": 6134840.165685656}
        }, {
            "attributes": {
                "OBJECTID": 1340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906695.915097124, "y": 6137479.032426407}
        }, {
            "attributes": {"OBJECTID": 1341, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906652.1702107873, "y": 6134964.311410765}
        }, {
            "attributes": {"OBJECTID": 1342, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906938.2390382283, "y": 6137284.862098317}
        }, {
            "attributes": {
                "OBJECTID": 1343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904966.246541477, "y": 6136399.846780123}
        }, {
            "attributes": {"OBJECTID": 1344, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906456.240114628, "y": 6133739.431932456}
        }, {
            "attributes": {"OBJECTID": 1345, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906500.7690241362, "y": 6133704.447487404}
        }, {
            "attributes": {"OBJECTID": 1346, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907316.2009921253, "y": 6137842.011120579}
        }, {
            "attributes": {
                "OBJECTID": 1347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908042.77273318, "y": 6133905.679007986}
        }, {
            "attributes": {"OBJECTID": 1348, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907284.5761266637, "y": 6137809.872373871}
        }, {
            "attributes": {"OBJECTID": 1349, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908077.4083455852, "y": 6133854.920000021}
        }, {
            "attributes": {"OBJECTID": 1350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907254.134810034, "y": 6137805.757655936}
        }, {
            "attributes": {"OBJECTID": 1351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907243.301531144, "y": 6137718.194810188}
        }, {
            "attributes": {
                "OBJECTID": 1353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907258.779059185, "y": 6137671.14382304}
        }, {
            "attributes": {
                "OBJECTID": 1354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907259.2187711743, "y": 6137663.60875678}
        }, {
            "attributes": {
                "OBJECTID": 1355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.412832607, "y": 6137766.827887203}
        }, {
            "attributes": {"OBJECTID": 1357, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907248.111312386, "y": 6137860.711443323}
        }, {
            "attributes": {
                "OBJECTID": 1358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907269.2508836829, "y": 6137859.3539988715}
        }, {
            "attributes": {
                "OBJECTID": 1359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907315.52773184, "y": 6137882.661834108}
        }, {
            "attributes": {
                "OBJECTID": 1360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906767.8877120249, "y": 6137156.780836513}
        }, {
            "attributes": {
                "OBJECTID": 1362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906877.1898710004, "y": 6137235.290967833}
        }, {
            "attributes": {"OBJECTID": 1363, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904432.7723721378, "y": 6133446.189838004}
        }, {
            "attributes": {"OBJECTID": 1364, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907333.7360383107, "y": 6137820.413968332}
        }, {
            "attributes": {
                "OBJECTID": 1365,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907858.0486135606, "y": 6137428.283611665}
        }, {
            "attributes": {
                "OBJECTID": 1366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907819.7524823379, "y": 6137391.93506388}
        }, {
            "attributes": {
                "OBJECTID": 1367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907778.9282854795, "y": 6137305.85351642}
        }, {
            "attributes": {
                "OBJECTID": 1368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907763.7376277635, "y": 6137379.217866931}
        }, {
            "attributes": {
                "OBJECTID": 1369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907611.6729769527, "y": 6137459.161048759}
        }, {
            "attributes": {
                "OBJECTID": 1370,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907870.510273959, "y": 6137209.943540874}
        }, {
            "attributes": {
                "OBJECTID": 1371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907581.783693674, "y": 6137390.519258433}
        }, {
            "attributes": {
                "OBJECTID": 1372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907552.2328216438, "y": 6137343.243511785}
        }, {
            "attributes": {
                "OBJECTID": 1373,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907566.5333687093, "y": 6137240.561743476}
        }, {
            "attributes": {
                "OBJECTID": 1375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.2001773324, "y": 6137213.031200798}
        }, {
            "attributes": {
                "OBJECTID": 1376,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907779.0677688005, "y": 6137338.635492823}
        }, {
            "attributes": {
                "OBJECTID": 1377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907472.560794167, "y": 6137245.394932402}
        }, {
            "attributes": {
                "OBJECTID": 1379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907517.7794392481, "y": 6137325.04352088}
        }, {
            "attributes": {
                "OBJECTID": 1380,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907353.5542472599, "y": 6137229.295944471}
        }, {
            "attributes": {
                "OBJECTID": 1381,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907439.834644986, "y": 6137206.0257838685}
        }, {
            "attributes": {
                "OBJECTID": 1382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907406.4755331797, "y": 6137197.233960351}
        }, {
            "attributes": {"OBJECTID": 1383, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907408.2064399433, "y": 6137165.926226611}
        }, {
            "attributes": {
                "OBJECTID": 1384,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.1271984961, "y": 6136987.293039824}
        }, {
            "attributes": {
                "OBJECTID": 1386,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.3372909485, "y": 6136976.401208523}
        }, {
            "attributes": {
                "OBJECTID": 1387,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907229.928052802, "y": 6136949.479378961}
        }, {
            "attributes": {
                "OBJECTID": 1390,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907233.8601911713, "y": 6136936.972694761}
        }, {
            "attributes": {"OBJECTID": 1391, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907319.5160865586, "y": 6137076.944156449}
        }, {
            "attributes": {
                "OBJECTID": 1392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907657.6569435264, "y": 6136912.49845904}
        }, {
            "attributes": {
                "OBJECTID": 1393,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907360.652757226, "y": 6137114.5289873695}
        }, {
            "attributes": {
                "OBJECTID": 1394,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.4651177218, "y": 6136979.402971807}
        }, {
            "attributes": {
                "OBJECTID": 1395,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907612.0781798977, "y": 6136946.168268726}
        }, {
            "attributes": {
                "OBJECTID": 1396,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.3893610672, "y": 6136764.746161338}
        }, {
            "attributes": {
                "OBJECTID": 1397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.0523130537, "y": 6135691.834975468}
        }, {
            "attributes": {
                "OBJECTID": 1398,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907277.2224724204, "y": 6135685.78394481}
        }, {
            "attributes": {
                "OBJECTID": 1399,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907305.1881548974, "y": 6135726.328435803}
        }, {
            "attributes": {"OBJECTID": 1400, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908667.9345331918, "y": 6136248.218900026}
        }, {
            "attributes": {
                "OBJECTID": 1401,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907311.9730778649, "y": 6135723.829558209}
        }, {
            "attributes": {
                "OBJECTID": 1402,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907345.7552037367, "y": 6135701.641827347}
        }, {
            "attributes": {"OBJECTID": 1403, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908721.0084381397, "y": 6136304.426733956}
        }, {
            "attributes": {
                "OBJECTID": 1404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907356.1413122215, "y": 6135691.971854008}
        }, {
            "attributes": {"OBJECTID": 1405, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908672.0067114865, "y": 6136266.099756174}
        }, {
            "attributes": {
                "OBJECTID": 1406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907362.6824455007, "y": 6135673.121029386}
        }, {
            "attributes": {
                "OBJECTID": 1407,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907357.245601573, "y": 6135674.14260847}
        }, {
            "attributes": {
                "OBJECTID": 1408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907375.4396591475, "y": 6135611.110405456}
        }, {
            "attributes": {"OBJECTID": 1409, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904036.109856986, "y": 6135451.82016015}
        }, {
            "attributes": {"OBJECTID": 1410, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903783.5704601684, "y": 6135409.308987891}
        }, {
            "attributes": {"OBJECTID": 1411, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904059.602722318, "y": 6135178.883012386}
        }, {
            "attributes": {"OBJECTID": 1412, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904045.515240764, "y": 6135177.038601404}
        }, {
            "attributes": {"OBJECTID": 1413, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909621.075501779, "y": 6136833.027335045}
        }, {
            "attributes": {"OBJECTID": 1414, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904042.5485763284, "y": 6135173.606829606}
        }, {
            "attributes": {"OBJECTID": 1416, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909440.45628838, "y": 6136759.90973799}
        }, {
            "attributes": {"OBJECTID": 1417, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904418.6648530723, "y": 6135120.694958167}
        }, {
            "attributes": {"OBJECTID": 1418, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904451.7868543589, "y": 6135138.117449314}
        }, {
            "attributes": {"OBJECTID": 1419, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910677.9015591538, "y": 6137353.686694399}
        }, {
            "attributes": {"OBJECTID": 1420, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910604.0811520324, "y": 6137204.668443268}
        }, {
            "attributes": {"OBJECTID": 1422, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910397.4721771227, "y": 6137120.400218231}
        }, {
            "attributes": {"OBJECTID": 1423, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910406.1907196415, "y": 6137071.466461144}
        }, {
            "attributes": {"OBJECTID": 1424, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910378.2350559146, "y": 6137128.81965746}
        }, {
            "attributes": {"OBJECTID": 1425, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1904785.1742577518, "y": 6134939.962489767}
        }, {
            "attributes": {"OBJECTID": 1426, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910460.586988814, "y": 6137274.834719923}
        }, {
            "attributes": {"OBJECTID": 1427, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910476.0013987068, "y": 6137302.734769103}
        }, {
            "attributes": {"OBJECTID": 1428, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910536.0337737016, "y": 6137416.2792742355}
        }, {
            "attributes": {"OBJECTID": 1429, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905075.0490985836, "y": 6134479.370663384}
        }, {
            "attributes": {"OBJECTID": 1430, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905113.1014401182, "y": 6134425.920656795}
        }, {
            "attributes": {"OBJECTID": 1431, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911271.7954953192, "y": 6137687.382723167}
        }, {
            "attributes": {"OBJECTID": 1432, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911431.4608183242, "y": 6137765.124338194}
        }, {
            "attributes": {"OBJECTID": 1433, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905229.3301204555, "y": 6133882.9742918005}
        }, {
            "attributes": {"OBJECTID": 1434, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905214.1539342785, "y": 6133675.415997124}
        }, {
            "attributes": {"OBJECTID": 1435, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912220.2932166203, "y": 6138276.475252947}
        }, {
            "attributes": {"OBJECTID": 1436, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912071.8664867692, "y": 6138174.418789366}
        }, {
            "attributes": {"OBJECTID": 1437, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912091.6535262552, "y": 6138197.651509614}
        }, {
            "attributes": {"OBJECTID": 1438, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912178.5717846698, "y": 6138247.266285219}
        }, {
            "attributes": {
                "OBJECTID": 1439,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904889.3960178106, "y": 6133530.835768434}
        }, {
            "attributes": {
                "OBJECTID": 1440,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904888.875042598, "y": 6133497.215603691}
        }, {
            "attributes": {"OBJECTID": 1441, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912846.7681413484, "y": 6138441.1062933775}
        }, {
            "attributes": {
                "OBJECTID": 1442,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904940.096479893, "y": 6133419.400431476}
        }, {
            "attributes": {"OBJECTID": 1443, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1913065.8358823548, "y": 6138261.931535584}
        }, {
            "attributes": {
                "OBJECTID": 1444,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904375.7489629807, "y": 6133433.388386225}
        }, {
            "attributes": {"OBJECTID": 1445, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912758.927044357, "y": 6138442.532291378}
        }, {
            "attributes": {
                "OBJECTID": 1446,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904392.6049602774, "y": 6133433.707128955}
        }, {
            "attributes": {"OBJECTID": 1447, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912757.433136795, "y": 6138439.099209948}
        }, {
            "attributes": {
                "OBJECTID": 1448,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904422.776995059, "y": 6133390.925618779}
        }, {
            "attributes": {
                "OBJECTID": 1449,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903842.1389838622, "y": 6133831.448898312}
        }, {
            "attributes": {"OBJECTID": 1450, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912754.0857597026, "y": 6138441.238206532}
        }, {
            "attributes": {
                "OBJECTID": 1451,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903846.3513133947, "y": 6133828.002645931}
        }, {
            "attributes": {"OBJECTID": 1452, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1912702.2409332586, "y": 6138440.738940304}
        }, {
            "attributes": {
                "OBJECTID": 1453,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903126.560599116, "y": 6134120.0511727985}
        }, {
            "attributes": {
                "OBJECTID": 1454,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902672.4639058828, "y": 6134271.89303993}
        }, {
            "attributes": {
                "OBJECTID": 1455,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902422.3301232648, "y": 6134458.788407438}
        }, {
            "attributes": {
                "OBJECTID": 1456,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902934.4253843962, "y": 6134391.781256603}
        }, {
            "attributes": {
                "OBJECTID": 1457,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902817.5543906, "y": 6134545.286956214}
        }, {
            "attributes": {
                "OBJECTID": 1458,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.532016836, "y": 6134538.984713131}
        }, {
            "attributes": {
                "OBJECTID": 1459,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.050825941, "y": 6134536.220807139}
        }, {
            "attributes": {
                "OBJECTID": 1460,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.703448855, "y": 6134511.081988187}
        }, {
            "attributes": {
                "OBJECTID": 1461,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.7220824712, "y": 6134478.062156511}
        }, {
            "attributes": {
                "OBJECTID": 1462,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902858.7771112348, "y": 6134458.925266265}
        }, {
            "attributes": {
                "OBJECTID": 1463,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902835.2953778482, "y": 6134496.741778757}
        }, {
            "attributes": {
                "OBJECTID": 1464,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902650.9336031675, "y": 6135065.051050501}
        }, {
            "attributes": {"OBJECTID": 1465, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1911399.8207020953, "y": 6138084.699404689}
        }, {
            "attributes": {
                "OBJECTID": 1466,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902929.2991218474, "y": 6134619.765934589}
        }, {
            "attributes": {
                "OBJECTID": 1467,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902911.1251017842, "y": 6134655.688787508}
        }, {
            "attributes": {
                "OBJECTID": 1468,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902925.145791648, "y": 6134679.993504531}
        }, {
            "attributes": {
                "OBJECTID": 1469,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.8280886612, "y": 6135227.255127575}
        }, {
            "attributes": {
                "OBJECTID": 1470,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902880.7827481735, "y": 6134890.542137745}
        }, {
            "attributes": {
                "OBJECTID": 1471,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902822.806444178, "y": 6134888.338933716}
        }, {
            "attributes": {"OBJECTID": 1472, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910814.6775911078, "y": 6137877.062571503}
        }, {
            "attributes": {
                "OBJECTID": 1473,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902759.9688180112, "y": 6134828.119912373}
        }, {
            "attributes": {
                "OBJECTID": 1474,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902800.611564101, "y": 6134861.635144575}
        }, {
            "attributes": {
                "OBJECTID": 1475,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902821.9270201991, "y": 6134888.474130314}
        }, {
            "attributes": {
                "OBJECTID": 1476,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902793.7487174913, "y": 6134913.881113372}
        }, {
            "attributes": {
                "OBJECTID": 1477,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902752.4202433447, "y": 6135020.605620167}
        }, {
            "attributes": {
                "OBJECTID": 1478,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902789.9048554748, "y": 6135168.799680777}
        }, {
            "attributes": {
                "OBJECTID": 1479,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902836.1814809956, "y": 6135152.682398705}
        }, {
            "attributes": {
                "OBJECTID": 1480,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902856.578551294, "y": 6135145.313125429}
        }, {
            "attributes": {
                "OBJECTID": 1481,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902960.628879334, "y": 6135187.093567133}
        }, {
            "attributes": {
                "OBJECTID": 1482,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902954.121141903, "y": 6135190.570411448}
        }, {
            "attributes": {
                "OBJECTID": 1483,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902965.48129594, "y": 6135239.41496557}
        }, {
            "attributes": {
                "OBJECTID": 1484,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903034.0685738053, "y": 6135135.168075113}
        }, {
            "attributes": {
                "OBJECTID": 1485,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909983.7232333224, "y": 6138224.425820209}
        }, {
            "attributes": {
                "OBJECTID": 1486,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.855051162, "y": 6138223.562562364}
        }, {
            "attributes": {
                "OBJECTID": 1487,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.0190417874, "y": 6138231.215003898}
        }, {
            "attributes": {
                "OBJECTID": 1488,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903004.929583895, "y": 6135091.641973164}
        }, {
            "attributes": {
                "OBJECTID": 1489,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909985.4864227388, "y": 6138232.956381955}
        }, {
            "attributes": {
                "OBJECTID": 1490,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902915.3107146362, "y": 6134989.585089844}
        }, {
            "attributes": {
                "OBJECTID": 1491,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909957.8269801824, "y": 6138223.904859957}
        }, {
            "attributes": {
                "OBJECTID": 1492,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903092.6938704338, "y": 6134455.9477529125}
        }, {
            "attributes": {
                "OBJECTID": 1493,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903075.566253579, "y": 6134433.209198546}
        }, {
            "attributes": {
                "OBJECTID": 1494,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903077.3417994608, "y": 6134431.890684693}
        }, {
            "attributes": {
                "OBJECTID": 1495,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903283.5411186484, "y": 6134381.989257241}
        }, {
            "attributes": {
                "OBJECTID": 1496,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903289.4455044349, "y": 6134396.416062326}
        }, {
            "attributes": {
                "OBJECTID": 1497,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903390.1206255197, "y": 6134501.041168628}
        }, {
            "attributes": {
                "OBJECTID": 1498,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903373.257949054, "y": 6134490.6248322055}
        }, {
            "attributes": {
                "OBJECTID": 1499,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903244.264262712, "y": 6134572.216746877}
        }, {
            "attributes": {
                "OBJECTID": 1500,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902797.3613689276, "y": 6134939.809933671}
        }, {
            "attributes": {
                "OBJECTID": 1501,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903056.639713756, "y": 6134750.037274313}
        }, {
            "attributes": {
                "OBJECTID": 1502,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903579.9426212208, "y": 6134383.576471645}
        }, {
            "attributes": {
                "OBJECTID": 1503,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903607.5687792532, "y": 6134374.612302446}
        }, {
            "attributes": {
                "OBJECTID": 1504,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903611.4059621012, "y": 6134478.185663522}
        }, {
            "attributes": {
                "OBJECTID": 1505,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903588.2593003819, "y": 6134357.957431719}
        }, {
            "attributes": {
                "OBJECTID": 1506,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903590.3843894573, "y": 6134359.527951768}
        }, {
            "attributes": {
                "OBJECTID": 1507,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903391.6813247846, "y": 6134605.185201541}
        }, {
            "attributes": {
                "OBJECTID": 1508,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903361.4536302513, "y": 6134763.913906735}
        }, {
            "attributes": {
                "OBJECTID": 1509,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.1579453263, "y": 6134819.265436932}
        }, {
            "attributes": {
                "OBJECTID": 1510,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903174.6094309313, "y": 6135005.324844478}
        }, {
            "attributes": {
                "OBJECTID": 1511,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903759.4553188828, "y": 6135490.97642825}
        }, {
            "attributes": {
                "OBJECTID": 1512,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.2662390522, "y": 6135389.946343954}
        }, {
            "attributes": {
                "OBJECTID": 1513,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.786101075, "y": 6135412.795937644}
        }, {
            "attributes": {
                "OBJECTID": 1514,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904046.4046834921, "y": 6135180.286767989}
        }, {
            "attributes": {
                "OBJECTID": 1515,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904386.544727194, "y": 6135084.997155731}
        }, {
            "attributes": {
                "OBJECTID": 1516,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904404.317997095, "y": 6135091.795533436}
        }, {
            "attributes": {
                "OBJECTID": 1517,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903951.8053802196, "y": 6135410.080156165}
        }, {
            "attributes": {
                "OBJECTID": 1518,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903956.7546447767, "y": 6135410.422341251}
        }, {
            "attributes": {
                "OBJECTID": 1519,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904650.9752720164, "y": 6135173.122776307}
        }, {
            "attributes": {
                "OBJECTID": 1520,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905105.4938661188, "y": 6134594.496685447}
        }, {
            "attributes": {
                "OBJECTID": 1521,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908198.8777249127, "y": 6135018.369000285}
        }, {
            "attributes": {
                "OBJECTID": 1522,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908225.6991543393, "y": 6135553.104195939}
        }, {
            "attributes": {
                "OBJECTID": 1523,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908192.9232453469, "y": 6134974.260972653}
        }, {
            "attributes": {
                "OBJECTID": 1524,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.5945018777, "y": 6134987.166544743}
        }, {
            "attributes": {
                "OBJECTID": 1525,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.356278168, "y": 6134986.236848839}
        }, {
            "attributes": {
                "OBJECTID": 1526,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908194.4171529151, "y": 6134974.304369521}
        }, {
            "attributes": {
                "OBJECTID": 1527,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908242.6919632927, "y": 6135033.399430952}
        }, {
            "attributes": {
                "OBJECTID": 1529,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908307.5377930657, "y": 6135053.283704777}
        }, {
            "attributes": {
                "OBJECTID": 1530,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908348.8061546963, "y": 6135021.895849664}
        }, {
            "attributes": {
                "OBJECTID": 1531,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908421.2829355677, "y": 6134980.997505271}
        }, {
            "attributes": {
                "OBJECTID": 1532,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.776502847, "y": 6134973.229462425}
        }, {
            "attributes": {
                "OBJECTID": 1533,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908483.2333453852, "y": 6134952.398991281}
        }, {
            "attributes": {
                "OBJECTID": 1534,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908520.9517284546, "y": 6134922.533725532}
        }, {
            "attributes": {
                "OBJECTID": 1535,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908539.6478369322, "y": 6134905.7776429085}
        }, {
            "attributes": {
                "OBJECTID": 1536,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908642.8666083806, "y": 6134867.037985868}
        }, {
            "attributes": {
                "OBJECTID": 1537,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.0250864744, "y": 6134830.900603435}
        }, {
            "attributes": {
                "OBJECTID": 1538,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.1657252351, "y": 6134818.991707774}
        }, {
            "attributes": {
                "OBJECTID": 1539,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908967.673505419, "y": 6134831.73347567}
        }, {
            "attributes": {
                "OBJECTID": 1540,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908989.629048591, "y": 6134849.454145098}
        }, {
            "attributes": {
                "OBJECTID": 1541,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908976.5812910767, "y": 6134934.841680811}
        }, {
            "attributes": {
                "OBJECTID": 1542,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908955.3537773762, "y": 6134976.871461869}
        }, {
            "attributes": {
                "OBJECTID": 1543,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.9516408436, "y": 6135020.704098223}
        }, {
            "attributes": {
                "OBJECTID": 1544,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908838.8512510892, "y": 6135039.581861178}
        }, {
            "attributes": {
                "OBJECTID": 1545,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908807.899979874, "y": 6135046.62222588}
        }, {
            "attributes": {
                "OBJECTID": 1547,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.2121032153, "y": 6135096.797927737}
        }, {
            "attributes": {
                "OBJECTID": 1548,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908713.7303698289, "y": 6135115.103344178}
        }, {
            "attributes": {
                "OBJECTID": 1549,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908695.8992137972, "y": 6135130.078863059}
        }, {
            "attributes": {
                "OBJECTID": 1550,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908696.9556357616, "y": 6135127.373186116}
        }, {
            "attributes": {
                "OBJECTID": 1551,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908658.3333384313, "y": 6135152.40532059}
        }, {
            "attributes": {
                "OBJECTID": 1552,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908628.4629794687, "y": 6135158.803156662}
        }, {
            "attributes": {
                "OBJECTID": 1553,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908589.6959667997, "y": 6135190.166476511}
        }, {
            "attributes": {
                "OBJECTID": 1554,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908579.6293452473, "y": 6135197.549141636}
        }, {
            "attributes": {
                "OBJECTID": 1555,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908534.7943071306, "y": 6135274.145293947}
        }, {
            "attributes": {
                "OBJECTID": 1556,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908516.985414996, "y": 6135277.956007558}
        }, {
            "attributes": {
                "OBJECTID": 1557,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908234.7854964575, "y": 6135541.266071969}
        }, {
            "attributes": {
                "OBJECTID": 1558,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908457.3382054411, "y": 6135322.596398862}
        }, {
            "attributes": {
                "OBJECTID": 1559,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.7353146344, "y": 6135330.675226228}
        }, {
            "attributes": {
                "OBJECTID": 1560,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908420.9467507047, "y": 6135351.070960913}
        }, {
            "attributes": {
                "OBJECTID": 1561,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908350.7453402267, "y": 6135378.826197038}
        }, {
            "attributes": {
                "OBJECTID": 1562,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908314.4173375997, "y": 6135392.0228184955}
        }, {
            "attributes": {
                "OBJECTID": 1563,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908321.6375197736, "y": 6135399.171970646}
        }, {
            "attributes": {
                "OBJECTID": 1564,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908326.3073724087, "y": 6135414.949200769}
        }, {
            "attributes": {
                "OBJECTID": 1565,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908320.5666262703, "y": 6135413.904283873}
        }, {
            "attributes": {
                "OBJECTID": 1566,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905629.8977233479, "y": 6133368.219931417}
        }, {
            "attributes": {
                "OBJECTID": 1567,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908268.660574102, "y": 6135410.233722159}
        }, {
            "attributes": {
                "OBJECTID": 1568,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905646.6757970024, "y": 6133345.279004463}
        }, {
            "attributes": {
                "OBJECTID": 1569,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908213.391560119, "y": 6135427.69018661}
        }, {
            "attributes": {
                "OBJECTID": 1570,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905644.3035786513, "y": 6133334.613755583}
        }, {
            "attributes": {
                "OBJECTID": 1571,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908207.5528528271, "y": 6135439.666697211}
        }, {
            "attributes": {
                "OBJECTID": 1572,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908220.2777838216, "y": 6135415.059367735}
        }, {
            "attributes": {
                "OBJECTID": 1573,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908212.1625929405, "y": 6135411.597455}
        }, {
            "attributes": {
                "OBJECTID": 1574,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908168.4463157142, "y": 6135374.8251510095}
        }, {
            "attributes": {
                "OBJECTID": 1575,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908143.8580665844, "y": 6135347.8026993135}
        }, {
            "attributes": {
                "OBJECTID": 1576,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905662.9640648954, "y": 6133380.595741787}
        }, {
            "attributes": {
                "OBJECTID": 1577,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908132.1517089354, "y": 6135296.27683397}
        }, {
            "attributes": {
                "OBJECTID": 1578,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908136.7146948632, "y": 6135269.224585225}
        }, {
            "attributes": {
                "OBJECTID": 1579,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908128.0651704266, "y": 6135177.2939813575}
        }, {
            "attributes": {
                "OBJECTID": 1580,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905663.7488673017, "y": 6133415.146642566}
        }, {
            "attributes": {
                "OBJECTID": 1581,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908184.1501562786, "y": 6135167.227343104}
        }, {
            "attributes": {
                "OBJECTID": 1582,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908170.156183089, "y": 6135103.971870363}
        }, {
            "attributes": {
                "OBJECTID": 1583,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908233.726291504, "y": 6135131.611134524}
        }, {
            "attributes": {"OBJECTID": 1585, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908596.730245422, "y": 6135532.7535495395}
        }, {
            "attributes": {"OBJECTID": 1586, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908606.222458402, "y": 6135415.283040061}
        }, {
            "attributes": {"OBJECTID": 1587, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908669.6122292385, "y": 6135425.052852736}
        }, {
            "attributes": {"OBJECTID": 1588, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908718.432505123, "y": 6135406.147532516}
        }, {
            "attributes": {"OBJECTID": 1589, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908756.2655472637, "y": 6135376.92165216}
        }, {
            "attributes": {"OBJECTID": 1590, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908749.6932445276, "y": 6135378.148506168}
        }, {
            "attributes": {"OBJECTID": 1591, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908725.170673899, "y": 6135368.221843429}
        }, {
            "attributes": {
                "OBJECTID": 1593,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.2685742478, "y": 6136995.320014502}
        }, {
            "attributes": {
                "OBJECTID": 1594,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907249.2345260475, "y": 6136957.85808126}
        }, {
            "attributes": {"OBJECTID": 1595, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907278.7586813972, "y": 6137034.508387284}
        }, {
            "attributes": {"OBJECTID": 1596, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907285.1283826577, "y": 6137058.080264088}
        }, {
            "attributes": {"OBJECTID": 1598, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907288.3277048236, "y": 6137107.825334529}
        }, {
            "attributes": {"OBJECTID": 1599, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907261.467424888, "y": 6137064.098874668}
        }, {
            "attributes": {"OBJECTID": 1600, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907068.5062195493, "y": 6139309.312540341}
        }, {
            "attributes": {"OBJECTID": 1601, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905928.2383001384, "y": 6141376.495057559}
        }, {
            "attributes": {"OBJECTID": 1602, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905900.7390463247, "y": 6141329.869097706}
        }, {
            "attributes": {
                "OBJECTID": 1603,
                "POZN": "pondelok, streda",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 0,
                "UDRZV_DATE": null
            },
            "geometry": {"type": "point", "x": 1905912.5078542123, "y": 6141348.000772766}
        }, {
            "attributes": {"OBJECTID": 1604, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905909.9975996905, "y": 6141343.305408541}
        }, {
            "attributes": {"OBJECTID": 1605, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905912.5546083974, "y": 6141346.691215209}
        }, {
            "attributes": {"OBJECTID": 1606, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905919.103534041, "y": 6141359.547938782}
        }, {
            "attributes": {"OBJECTID": 1607, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905936.05949624, "y": 6141443.934593411}
        }, {
            "attributes": {"OBJECTID": 1609, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905906.4387155753, "y": 6141401.774652854}
        }, {
            "attributes": {
                "OBJECTID": 1610,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905477.7707336233, "y": 6134690.765580139}
        }, {
            "attributes": {
                "OBJECTID": 1611,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905468.0825983358, "y": 6134672.796550506}
        }, {
            "attributes": {
                "OBJECTID": 1612,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905438.4025957016, "y": 6134664.00399058}
        }, {
            "attributes": {
                "OBJECTID": 1613,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905410.192010347, "y": 6134537.370765492}
        }, {
            "attributes": {"OBJECTID": 1614, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907626.248037877, "y": 6134420.851894421}
        }, {
            "attributes": {"OBJECTID": 1615, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907632.8581892445, "y": 6134411.381978941}
        }, {
            "attributes": {
                "OBJECTID": 1616,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905981.2031119806, "y": 6135472.533332942}
        }, {
            "attributes": {
                "OBJECTID": 1617,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906021.5185787673, "y": 6135418.474544364}
        }, {
            "attributes": {
                "OBJECTID": 1618,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906029.670505078, "y": 6135361.20458282}
        }, {
            "attributes": {
                "OBJECTID": 1619,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905909.9753357936, "y": 6135347.352019825}
        }, {
            "attributes": {
                "OBJECTID": 1620,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905887.0501998595, "y": 6135363.070732916}
        }, {
            "attributes": {"OBJECTID": 1621, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907347.3314877236, "y": 6133456.0775582865}
        }, {
            "attributes": {"OBJECTID": 1622, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907445.5998814127, "y": 6133480.804418634}
        }, {
            "attributes": {"OBJECTID": 1623, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907477.8925524992, "y": 6133476.835967183}
        }, {
            "attributes": {"OBJECTID": 1624, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907471.4905685864, "y": 6133490.022981593}
        }, {
            "attributes": {"OBJECTID": 1625, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907490.1376964876, "y": 6133469.409727811}
        }, {
            "attributes": {"OBJECTID": 1626, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907487.535046791, "y": 6133457.292455332}
        }, {
            "attributes": {"OBJECTID": 1627, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905939.8601662952, "y": 6135206.4590905225}
        }, {
            "attributes": {
                "OBJECTID": 1628,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.6091340915, "y": 6133675.410990547}
        }, {
            "attributes": {"OBJECTID": 1629, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907110.2376702558, "y": 6133853.511621956}
        }, {
            "attributes": {"OBJECTID": 1630, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907096.7045597625, "y": 6133838.591740583}
        }, {
            "attributes": {"OBJECTID": 1631, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907054.487756071, "y": 6133777.061690255}
        }, {
            "attributes": {
                "OBJECTID": 1632,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907039.4418137001, "y": 6133793.149680456}
        }, {
            "attributes": {
                "OBJECTID": 1633,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.4497159247, "y": 6133772.23196134}
        }, {
            "attributes": {
                "OBJECTID": 1634,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906967.641855332, "y": 6133711.139630361}
        }, {
            "attributes": {
                "OBJECTID": 1635,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906749.0370920892, "y": 6133820.035383028}
        }, {
            "attributes": {
                "OBJECTID": 1636,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906601.0689985368, "y": 6133930.58974538}
        }, {
            "attributes": {
                "OBJECTID": 1637,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906538.92934558, "y": 6133593.118365306}
        }, {
            "attributes": {"OBJECTID": 1638, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906428.1692352316, "y": 6135547.198819529}
        }, {
            "attributes": {"OBJECTID": 1639, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906527.2207615394, "y": 6133398.106475999}
        }, {
            "attributes": {
                "OBJECTID": 1640,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906519.387208972, "y": 6133277.613056725}
        }, {
            "attributes": {"OBJECTID": 1641, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906512.8316041601, "y": 6133233.770988021}
        }, {
            "attributes": {
                "OBJECTID": 1642,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906536.4602792775, "y": 6133245.852899886}
        }, {
            "attributes": {"OBJECTID": 1643, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906600.7450588213, "y": 6133289.611591368}
        }, {
            "attributes": {"OBJECTID": 1644, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906643.2724438854, "y": 6133268.386378594}
        }, {
            "attributes": {"OBJECTID": 1645, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906650.6718504422, "y": 6133263.062978658}
        }, {
            "attributes": {"OBJECTID": 1646, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906875.77433236, "y": 6133444.966598466}
        }, {
            "attributes": {"OBJECTID": 1647, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906832.424296252, "y": 6133481.436901184}
        }, {
            "attributes": {"OBJECTID": 1648, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906964.950150042, "y": 6133633.042147059}
        }, {
            "attributes": {"OBJECTID": 1649, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906981.009099785, "y": 6133645.743766291}
        }, {
            "attributes": {"OBJECTID": 1650, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907272.9266532736, "y": 6134105.531372752}
        }, {
            "attributes": {"OBJECTID": 1651, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907391.962811169, "y": 6134072.878602034}
        }, {
            "attributes": {
                "OBJECTID": 1652,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907683.6605086594, "y": 6133713.6657905225}
        }, {
            "attributes": {"OBJECTID": 1653, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907410.9962177055, "y": 6134055.157871172}
        }, {
            "attributes": {"OBJECTID": 1654, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907422.635783658, "y": 6134059.75244027}
        }, {
            "attributes": {"OBJECTID": 1655, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907353.4941347314, "y": 6134081.126481554}
        }, {
            "attributes": {"OBJECTID": 1656, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907336.290820626, "y": 6134055.461616678}
        }, {
            "attributes": {"OBJECTID": 1657, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907337.308280769, "y": 6134022.411832798}
        }, {
            "attributes": {"OBJECTID": 1658, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907328.2346290774, "y": 6134008.296077519}
        }, {
            "attributes": {"OBJECTID": 1659, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907372.5843142092, "y": 6134059.225057714}
        }, {
            "attributes": {"OBJECTID": 1660, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907370.1185874874, "y": 6134297.605285088}
        }, {
            "attributes": {"OBJECTID": 1661, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907398.999316183, "y": 6134323.813295608}
        }, {
            "attributes": {
                "OBJECTID": 1662,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907458.5296402746, "y": 6134402.983571297}
        }, {
            "attributes": {
                "OBJECTID": 1663,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.839831775, "y": 6134405.27844539}
        }, {
            "attributes": {"OBJECTID": 1664, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907833.4748359637, "y": 6134916.942240977}
        }, {
            "attributes": {"OBJECTID": 1665, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.5145493213, "y": 6134939.057835544}
        }, {
            "attributes": {"OBJECTID": 1666, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907815.062592191, "y": 6134961.834454023}
        }, {
            "attributes": {"OBJECTID": 1667, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1908170.3888408255, "y": 6135513.787899686}
        }, {
            "attributes": {"OBJECTID": 1668, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905612.1489437353, "y": 6133508.990823574}
        }, {
            "attributes": {"OBJECTID": 1670, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1910887.2745970227, "y": 6136651.843016668}
        }, {
            "attributes": {"OBJECTID": 1671, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906592.6087172388, "y": 6133175.304120575}
        }, {
            "attributes": {"OBJECTID": 1672, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906574.92227654, "y": 6133172.428847946}
        }, {
            "attributes": {"OBJECTID": 1673, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1909141.435438187, "y": 6134588.688440576}
        }, {
            "attributes": {"OBJECTID": 1674, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902757.2448300745, "y": 6134846.847032911}
        }, {
            "attributes": {"OBJECTID": 1675, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902764.4883893412, "y": 6134834.4857934965}
        }, {
            "attributes": {"OBJECTID": 1676, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902679.9724055387, "y": 6134800.508333361}
        }, {
            "attributes": {
                "OBJECTID": 1677,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902794.0759967945, "y": 6134668.470369554}
        }, {
            "attributes": {
                "OBJECTID": 1678,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902809.3835399735, "y": 6134640.68405572}
        }, {
            "attributes": {"OBJECTID": 1679, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902658.5769107249, "y": 6134888.784414844}
        }, {
            "attributes": {
                "OBJECTID": 1680,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902609.4335856838, "y": 6134897.078813746}
        }, {
            "attributes": {"OBJECTID": 1681, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902794.7305554005, "y": 6134668.203321417}
        }, {
            "attributes": {
                "OBJECTID": 1682,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902775.7383370767, "y": 6134690.985895434}
        }, {
            "attributes": {"OBJECTID": 1683, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902763.9562821707, "y": 6134692.112507815}
        }, {
            "attributes": {
                "OBJECTID": 1684,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902738.2437061905, "y": 6134712.952359928}
        }, {
            "attributes": {"OBJECTID": 1685, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902928.7558827314, "y": 6134529.484624535}
        }, {
            "attributes": {
                "OBJECTID": 1686,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902933.2131151415, "y": 6134531.198712125}
        }, {
            "attributes": {
                "OBJECTID": 1687,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902945.8712544453, "y": 6134502.448151118}
        }, {
            "attributes": {"OBJECTID": 1688, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902936.7686596822, "y": 6134503.371118392}
        }, {
            "attributes": {"OBJECTID": 1689, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903029.4844371697, "y": 6134337.914550291}
        }, {
            "attributes": {"OBJECTID": 1690, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903124.5234524382, "y": 6134372.552764615}
        }, {
            "attributes": {"OBJECTID": 1691, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903101.1619441023, "y": 6134373.475717893}
        }, {
            "attributes": {
                "OBJECTID": 1692,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903176.0755086234, "y": 6134283.929685646}
        }, {
            "attributes": {"OBJECTID": 1693, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1903306.2992753403, "y": 6134159.14460513}
        }, {
            "attributes": {
                "OBJECTID": 1694,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903125.9539078907, "y": 6134356.151584372}
        }, {
            "attributes": {
                "OBJECTID": 1695,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903108.6370479036, "y": 6134330.864754544}
        }, {
            "attributes": {
                "OBJECTID": 1696,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902665.4132632974, "y": 6134874.89389344}
        }, {
            "attributes": {
                "OBJECTID": 1697,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902648.0225984836, "y": 6134743.629729349}
        }, {
            "attributes": {
                "OBJECTID": 1698,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902402.0421460716, "y": 6134785.054366907}
        }, {
            "attributes": {"OBJECTID": 1699, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902387.4759907008, "y": 6134800.21123772}
        }, {
            "attributes": {"OBJECTID": 1700, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902367.5030476633, "y": 6134792.655331472}
        }, {
            "attributes": {"OBJECTID": 1701, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1901960.597692202, "y": 6135182.0033227075}
        }, {
            "attributes": {
                "OBJECTID": 1702,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902252.2417337024, "y": 6134821.815791976}
        }, {
            "attributes": {"OBJECTID": 1703, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902279.6886673518, "y": 6134816.189322536}
        }, {
            "attributes": {"OBJECTID": 1704, "POZN": null, "SLUZ_ZOD": 7, "DRU_ODP": 5, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1902459.8525840268, "y": 6134793.676805489}
        }, {
            "attributes": {"OBJECTID": 2350, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1906558.831044144, "y": 6133180.804354591}
        }, {
            "attributes": {"OBJECTID": 2351, "POZN": null, "SLUZ_ZOD": 11, "DRU_ODP": 7, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1905853.8769916047, "y": 6133166.364579083}
        }, {
            "attributes": {"OBJECTID": 2352, "POZN": null, "SLUZ_ZOD": 10, "DRU_ODP": 6, "UDRZV_DATE": null},
            "geometry": {"type": "point", "x": 1907415.4178278754, "y": 6135685.800637304}
        }, {
            "attributes": {
                "OBJECTID": 2353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907196.2063734136, "y": 6133563.3679844495}
        }, {
            "attributes": {
                "OBJECTID": 2354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907065.5206308044, "y": 6133668.30166154}
        }, {
            "attributes": {
                "OBJECTID": 2355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907546.3807560152, "y": 6134177.045798393}
        }, {
            "attributes": {
                "OBJECTID": 2356,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903819.111433998, "y": 6135545.524756725}
        }, {
            "attributes": {
                "OBJECTID": 2357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903750.4261949789, "y": 6135770.717437156}
        }, {
            "attributes": {
                "OBJECTID": 3357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907047.0182182423, "y": 6134141.835925885}
        }, {
            "attributes": {
                "OBJECTID": 3358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.738033407, "y": 6134184.374183202}
        }, {
            "attributes": {
                "OBJECTID": 3359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906975.8917427901, "y": 6134203.897658475}
        }, {
            "attributes": {
                "OBJECTID": 3360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906926.492605556, "y": 6134246.064044205}
        }, {
            "attributes": {
                "OBJECTID": 3361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906907.7786859581, "y": 6134210.206330721}
        }, {
            "attributes": {
                "OBJECTID": 3362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.934554625, "y": 6134212.754835351}
        }, {
            "attributes": {
                "OBJECTID": 3363,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906965.3976543956, "y": 6134176.066121831}
        }, {
            "attributes": {
                "OBJECTID": 3364,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906990.6315565712, "y": 6134155.175839216}
        }]
    };

    Map.Dataset['1354'] = {
        name: "PUB_Stanovistia_odpadove_kose_1354",
        toGeoJSON: toGeoJSON,
        features: [{
            "attributes": {
                "OBJECTID": 5,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907715.4182895925, "y": 6134490.693261866}
        }, {
            "attributes": {
                "OBJECTID": 6,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907821.748440809, "y": 6134559.178277997}
        }, {
            "attributes": {
                "OBJECTID": 7,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907841.465349017, "y": 6134647.840925626}
        }, {
            "attributes": {
                "OBJECTID": 8,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907880.0397789662, "y": 6134658.688067981}
        }, {
            "attributes": {
                "OBJECTID": 9,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907874.1053369122, "y": 6134665.229073374}
        }, {
            "attributes": {
                "OBJECTID": 10,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907884.4613891423, "y": 6134700.716493143}
        }, {
            "attributes": {
                "OBJECTID": 11,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906376.5041897618, "y": 6133093.139789345}
        }, {
            "attributes": {
                "OBJECTID": 12,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907911.3762156214, "y": 6134724.936215856}
        }, {
            "attributes": {
                "OBJECTID": 13,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907914.4263696715, "y": 6134716.39229235}
        }, {
            "attributes": {
                "OBJECTID": 15,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907928.1041955033, "y": 6134755.755498992}
        }, {
            "attributes": {
                "OBJECTID": 16,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908026.389287123, "y": 6134733.44676663}
        }, {
            "attributes": {
                "OBJECTID": 17,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908040.845236193, "y": 6134732.855918154}
        }, {
            "attributes": {
                "OBJECTID": 18,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906428.131943198, "y": 6133092.692566031}
        }, {
            "attributes": {
                "OBJECTID": 21,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906431.6084509008, "y": 6133090.064295139}
        }, {
            "attributes": {
                "OBJECTID": 22,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.8802800188, "y": 6134786.478086811}
        }, {
            "attributes": {
                "OBJECTID": 23,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907800.6812271758, "y": 6134787.356019712}
        }, {
            "attributes": {
                "OBJECTID": 24,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907774.9975942546, "y": 6134792.663676843}
        }, {
            "attributes": {
                "OBJECTID": 25,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907750.6898702492, "y": 6134744.76636305}
        }, {
            "attributes": {
                "OBJECTID": 27,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907786.0115446786, "y": 6134712.598519317}
        }, {
            "attributes": {
                "OBJECTID": 29,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907812.108172903, "y": 6134711.887500005}
        }, {
            "attributes": {
                "OBJECTID": 30,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907848.3627046647, "y": 6134703.1115905065}
        }, {
            "attributes": {
                "OBJECTID": 31,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.5197215707, "y": 6134917.242678862}
        }, {
            "attributes": {
                "OBJECTID": 32,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.0865720527, "y": 6134716.357242085}
        }, {
            "attributes": {
                "OBJECTID": 33,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907729.6905615025, "y": 6134742.660002332}
        }, {
            "attributes": {
                "OBJECTID": 34,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 3,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906500.4818198502, "y": 6133053.246893748}
        }, {
            "attributes": {
                "OBJECTID": 35,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907662.1597056075, "y": 6134667.57242023}
        }, {
            "attributes": {
                "OBJECTID": 36,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907449.1131245452, "y": 6135096.707794487}
        }, {
            "attributes": {
                "OBJECTID": 37,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906528.3573335435, "y": 6133146.805088411}
        }, {
            "attributes": {
                "OBJECTID": 38,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.151231805, "y": 6135099.478557988}
        }, {
            "attributes": {
                "OBJECTID": 40,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907412.9632331051, "y": 6135158.646256893}
        }, {
            "attributes": {
                "OBJECTID": 42,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907421.7775103862, "y": 6135422.954670598}
        }, {
            "attributes": {
                "OBJECTID": 43,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907308.720322339, "y": 6135500.140402958}
        }, {
            "attributes": {
                "OBJECTID": 44,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907577.3298008451, "y": 6135856.473059273}
        }, {
            "attributes": {
                "OBJECTID": 47,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905712.2273923503, "y": 6133475.442503791}
        }, {
            "attributes": {
                "OBJECTID": 48,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905669.2024091596, "y": 6133419.392087442}
        }, {
            "attributes": {
                "OBJECTID": 49,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905661.8308324786, "y": 6133420.176426934}
        }, {
            "attributes": {
                "OBJECTID": 50,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.0137016822, "y": 6133176.200244628}
        }, {
            "attributes": {
                "OBJECTID": 51,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905779.9152087253, "y": 6133185.002957936}
        }, {
            "attributes": {
                "OBJECTID": 52,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.2096239834, "y": 6133185.243259624}
        }, {
            "attributes": {
                "OBJECTID": 53,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4687077007, "y": 6133189.029680803}
        }, {
            "attributes": {
                "OBJECTID": 54,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905791.541416347, "y": 6133195.754796161}
        }, {
            "attributes": {
                "OBJECTID": 55,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.839692301, "y": 6133202.311371518}
        }, {
            "attributes": {
                "OBJECTID": 56,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905769.2162924698, "y": 6133220.0303371465}
        }, {
            "attributes": {
                "OBJECTID": 57,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905786.3194190299, "y": 6133250.383621233}
        }, {
            "attributes": {
                "OBJECTID": 58,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905789.408534901, "y": 6133301.973937828}
        }, {
            "attributes": {
                "OBJECTID": 59,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905760.1994137128, "y": 6133306.951923367}
        }, {
            "attributes": {
                "OBJECTID": 60,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905717.122110358, "y": 6133294.487773948}
        }, {
            "attributes": {
                "OBJECTID": 61,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905700.78708828, "y": 6133277.319351502}
        }, {
            "attributes": {
                "OBJECTID": 62,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905687.9641961385, "y": 6133270.577484287}
        }, {
            "attributes": {
                "OBJECTID": 63,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905701.0631606213, "y": 6133254.880969473}
        }, {
            "attributes": {
                "OBJECTID": 64,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905726.2247051212, "y": 6133242.992622522}
        }, {
            "attributes": {
                "OBJECTID": 65,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906468.336090494, "y": 6132973.329831266}
        }, {
            "attributes": {
                "OBJECTID": 67,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906136.028486164, "y": 6132947.676630723}
        }, {
            "attributes": {
                "OBJECTID": 68,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.8995363861, "y": 6133191.144003098}
        }, {
            "attributes": {
                "OBJECTID": 69,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906323.5149989496, "y": 6133347.712104884}
        }, {
            "attributes": {
                "OBJECTID": 70,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906259.6732709762, "y": 6133332.7163406145}
        }, {
            "attributes": {
                "OBJECTID": 71,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.8993380351, "y": 6133335.765221341}
        }, {
            "attributes": {
                "OBJECTID": 72,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906181.126238272, "y": 6133341.532565195}
        }, {
            "attributes": {
                "OBJECTID": 73,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906152.0106254548, "y": 6133351.797312073}
        }, {
            "attributes": {
                "OBJECTID": 74,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906097.7846751055, "y": 6133379.9382346915}
        }, {
            "attributes": {
                "OBJECTID": 75,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0724219524, "y": 6133772.077423403}
        }, {
            "attributes": {
                "OBJECTID": 76,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905804.5524384317, "y": 6133192.041797571}
        }, {
            "attributes": {
                "OBJECTID": 77,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905851.459132264, "y": 6133286.92652144}
        }, {
            "attributes": {
                "OBJECTID": 78,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905889.343381373, "y": 6133344.828430389}
        }, {
            "attributes": {
                "OBJECTID": 79,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905894.1245534986, "y": 6133361.584795577}
        }, {
            "attributes": {
                "OBJECTID": 80,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905955.6385909207, "y": 6133472.143250674}
        }, {
            "attributes": {
                "OBJECTID": 81,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905973.7458192932, "y": 6133518.38297485}
        }, {
            "attributes": {
                "OBJECTID": 82,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906596.985799615, "y": 6135773.156234862}
        }, {
            "attributes": {
                "OBJECTID": 83,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905992.9417522824, "y": 6133537.926626156}
        }, {
            "attributes": {
                "OBJECTID": 84,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906580.9179443119, "y": 6135793.152399067}
        }, {
            "attributes": {
                "OBJECTID": 85,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905998.240560046, "y": 6133552.385385543}
        }, {
            "attributes": {
                "OBJECTID": 86,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906571.4145993867, "y": 6135812.070258994}
        }, {
            "attributes": {
                "OBJECTID": 87,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906575.9686797545, "y": 6135834.141426641}
        }, {
            "attributes": {
                "OBJECTID": 88,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906088.5885719655, "y": 6133703.991887836}
        }, {
            "attributes": {
                "OBJECTID": 89,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906582.7636214716, "y": 6135884.895980203}
        }, {
            "attributes": {
                "OBJECTID": 90,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906604.0512476943, "y": 6135966.319232119}
        }, {
            "attributes": {
                "OBJECTID": 91,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905885.1009955795, "y": 6133558.955584718}
        }, {
            "attributes": {
                "OBJECTID": 92,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906595.8347560787, "y": 6136037.608823871}
        }, {
            "attributes": {
                "OBJECTID": 93,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905879.1932701997, "y": 6133530.638846611}
        }, {
            "attributes": {
                "OBJECTID": 94,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906546.0805096717, "y": 6136139.701574597}
        }, {
            "attributes": {
                "OBJECTID": 95,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905846.472019075, "y": 6133480.772711071}
        }, {
            "attributes": {
                "OBJECTID": 96,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905782.1905791187, "y": 6133386.631792789}
        }, {
            "attributes": {
                "OBJECTID": 97,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906437.8534743334, "y": 6136158.595160377}
        }, {
            "attributes": {
                "OBJECTID": 98,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906460.7474408108, "y": 6136176.447116566}
        }, {
            "attributes": {
                "OBJECTID": 99,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905801.9642602676, "y": 6133485.727437082}
        }, {
            "attributes": {
                "OBJECTID": 100,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905843.32946985, "y": 6133634.8228091365}
        }, {
            "attributes": {
                "OBJECTID": 101,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905912.9531321742, "y": 6133739.46364099}
        }, {
            "attributes": {
                "OBJECTID": 102,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905871.359717632, "y": 6133759.67534645}
        }, {
            "attributes": {
                "OBJECTID": 103,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906412.3924804, "y": 6135836.433345888}
        }, {
            "attributes": {
                "OBJECTID": 104,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905860.5327839616, "y": 6133742.65285168}
        }, {
            "attributes": {
                "OBJECTID": 105,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906400.4100504096, "y": 6135817.717414381}
        }, {
            "attributes": {
                "OBJECTID": 106,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905834.4027598826, "y": 6133659.882287752}
        }, {
            "attributes": {
                "OBJECTID": 107,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906501.7085606437, "y": 6135786.602185356}
        }, {
            "attributes": {
                "OBJECTID": 108,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905792.4041424014, "y": 6133685.817990802}
        }, {
            "attributes": {
                "OBJECTID": 109,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906483.2428835048, "y": 6135714.989179464}
        }, {
            "attributes": {
                "OBJECTID": 110,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906522.9182632242, "y": 6135738.654239509}
        }, {
            "attributes": {
                "OBJECTID": 111,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905772.1172783978, "y": 6133546.158970819}
        }, {
            "attributes": {
                "OBJECTID": 112,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906496.5143932023, "y": 6135743.703751165}
        }, {
            "attributes": {
                "OBJECTID": 113,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905788.8096360397, "y": 6133555.686338421}
        }, {
            "attributes": {
                "OBJECTID": 114,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905666.960434615, "y": 6133646.715037914}
        }, {
            "attributes": {
                "OBJECTID": 115,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905659.6901586684, "y": 6133761.617915645}
        }, {
            "attributes": {
                "OBJECTID": 116,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905748.2681906915, "y": 6133785.891723458}
        }, {
            "attributes": {
                "OBJECTID": 117,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905837.378329872, "y": 6133855.63278393}
        }, {
            "attributes": {
                "OBJECTID": 118,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906741.6655154082, "y": 6135782.570901889}
        }, {
            "attributes": {
                "OBJECTID": 120,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.260376592, "y": 6135714.578542763}
        }, {
            "attributes": {
                "OBJECTID": 121,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.13278112, "y": 6135721.75300317}
        }, {
            "attributes": {
                "OBJECTID": 122,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906867.4587663948, "y": 6135764.01700682}
        }, {
            "attributes": {
                "OBJECTID": 123,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906904.852096546, "y": 6135779.941805}
        }, {
            "attributes": {
                "OBJECTID": 124,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906997.458780941, "y": 6135708.802922888}
        }, {
            "attributes": {
                "OBJECTID": 126,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0596261825, "y": 6135627.201842946}
        }, {
            "attributes": {
                "OBJECTID": 127,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907064.9039208235, "y": 6135601.023226205}
        }, {
            "attributes": {
                "OBJECTID": 128,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907093.6243494516, "y": 6135582.047409704}
        }, {
            "attributes": {
                "OBJECTID": 129,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907128.9527030494, "y": 6135555.60853213}
        }, {
            "attributes": {
                "OBJECTID": 130,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.1153218506, "y": 6135579.082859484}
        }, {
            "attributes": {
                "OBJECTID": 131,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907174.481261587, "y": 6135587.567551837}
        }, {
            "attributes": {
                "OBJECTID": 133,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907266.4267082072, "y": 6135385.840133711}
        }, {
            "attributes": {
                "OBJECTID": 134,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907227.2277759132, "y": 6135308.5135520995}
        }, {
            "attributes": {
                "OBJECTID": 135,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.4883665496, "y": 6135182.897320038}
        }, {
            "attributes": {
                "OBJECTID": 136,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907303.5105701755, "y": 6135176.669719245}
        }, {
            "attributes": {
                "OBJECTID": 137,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.1983651738, "y": 6135182.510076971}
        }, {
            "attributes": {
                "OBJECTID": 139,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907341.7120798256, "y": 6135216.7527803695}
        }, {
            "attributes": {
                "OBJECTID": 140,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907583.5035798044, "y": 6135322.107329599}
        }, {
            "attributes": {
                "OBJECTID": 141,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907740.7468133282, "y": 6135231.474764664}
        }, {
            "attributes": {
                "OBJECTID": 142,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907831.5657067003, "y": 6135171.860899544}
        }, {
            "attributes": {
                "OBJECTID": 143,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907864.1967890353, "y": 6135147.5147264525}
        }, {
            "attributes": {
                "OBJECTID": 148,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907856.6448747816, "y": 6135051.726410447}
        }, {
            "attributes": {
                "OBJECTID": 150,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907748.3321234307, "y": 6134877.857031423}
        }, {
            "attributes": {
                "OBJECTID": 152,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907642.1589327005, "y": 6134737.709555971}
        }, {
            "attributes": {
                "OBJECTID": 155,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906750.1636453376, "y": 6135211.590076912}
        }, {
            "attributes": {
                "OBJECTID": 156,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906735.1277217162, "y": 6135108.540296236}
        }, {
            "attributes": {
                "OBJECTID": 158,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905497.435321667, "y": 6133248.65643989}
        }, {
            "attributes": {
                "OBJECTID": 159,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905293.2316269958, "y": 6133591.755422778}
        }, {
            "attributes": {
                "OBJECTID": 160,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905248.0547267254, "y": 6133584.603607826}
        }, {
            "attributes": {
                "OBJECTID": 162,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905519.2828849296, "y": 6133181.386752148}
        }, {
            "attributes": {
                "OBJECTID": 163,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905558.9783021545, "y": 6133156.438812004}
        }, {
            "attributes": {
                "OBJECTID": 164,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905587.6575425698, "y": 6133157.308233975}
        }, {
            "attributes": {
                "OBJECTID": 165,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905616.4091406483, "y": 6133148.971131676}
        }, {
            "attributes": {
                "OBJECTID": 166,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905692.951309321, "y": 6133198.176172728}
        }, {
            "attributes": {
                "OBJECTID": 167,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905546.161977863, "y": 6133527.85273696}
        }, {
            "attributes": {
                "OBJECTID": 168,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907872.9620857395, "y": 6135576.9429088915}
        }, {
            "attributes": {
                "OBJECTID": 169,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905648.324438659, "y": 6133249.911358091}
        }, {
            "attributes": {
                "OBJECTID": 170,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905612.8001627605, "y": 6133219.699920983}
        }, {
            "attributes": {
                "OBJECTID": 171,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905604.09720497, "y": 6133233.770988021}
        }, {
            "attributes": {
                "OBJECTID": 172,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905603.225573355, "y": 6133259.525172384}
        }, {
            "attributes": {
                "OBJECTID": 173,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905570.4709263826, "y": 6133246.450320832}
        }, {
            "attributes": {
                "OBJECTID": 174,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 175,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905578.2376872592, "y": 6133276.229638446}
        }, {
            "attributes": {
                "OBJECTID": 176,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905527.4604147242, "y": 6133304.098300724}
        }, {
            "attributes": {
                "OBJECTID": 181,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906887.1912593313, "y": 6135896.308910409}
        }, {
            "attributes": {
                "OBJECTID": 182,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906894.473780419, "y": 6135916.91131614}
        }, {
            "attributes": {
                "OBJECTID": 183,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907202.3823787584, "y": 6135633.828719667}
        }, {
            "attributes": {
                "OBJECTID": 186,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907804.006340365, "y": 6135668.924544019}
        }, {
            "attributes": {
                "OBJECTID": 187,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907815.7961876353, "y": 6135676.699895229}
        }, {
            "attributes": {
                "OBJECTID": 190,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907829.342656465, "y": 6135649.918530623}
        }, {
            "attributes": {
                "OBJECTID": 192,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907397.7759149764, "y": 6134282.636229421}
        }, {
            "attributes": {
                "OBJECTID": 193,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907416.7748124688, "y": 6134278.6173370145}
        }, {
            "attributes": {
                "OBJECTID": 194,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907428.3320020025, "y": 6134217.224316813}
        }, {
            "attributes": {
                "OBJECTID": 195,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907438.7414875864, "y": 6134211.084204533}
        }, {
            "attributes": {
                "OBJECTID": 196,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907462.296691838, "y": 6134200.134153838}
        }, {
            "attributes": {
                "OBJECTID": 197,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907483.4963756693, "y": 6134182.596744726}
        }, {
            "attributes": {
                "OBJECTID": 198,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907492.7503649334, "y": 6134206.567995368}
        }, {
            "attributes": {
                "OBJECTID": 199,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907527.1035597967, "y": 6134241.025429731}
        }, {
            "attributes": {
                "OBJECTID": 200,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907470.1970361024, "y": 6134224.899880601}
        }, {
            "attributes": {
                "OBJECTID": 201,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907461.9682993393, "y": 6134241.4593613045}
        }, {
            "attributes": {
                "OBJECTID": 202,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907443.0295143751, "y": 6134254.071758889}
        }, {
            "attributes": {
                "OBJECTID": 203,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907098.4489361814, "y": 6133863.529986417}
        }, {
            "attributes": {
                "OBJECTID": 204,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907270.0913458404, "y": 6133756.808221914}
        }, {
            "attributes": {
                "OBJECTID": 205,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907358.6649250803, "y": 6133600.065754151}
        }, {
            "attributes": {
                "OBJECTID": 206,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907306.006687113, "y": 6133593.433442532}
        }, {
            "attributes": {
                "OBJECTID": 207,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906925.9148574024, "y": 6135151.806097471}
        }, {
            "attributes": {
                "OBJECTID": 209,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906898.4489994373, "y": 6135164.686900031}
        }, {
            "attributes": {
                "OBJECTID": 210,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906855.6340761255, "y": 6133959.782483528}
        }, {
            "attributes": {
                "OBJECTID": 211,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907218.6995897226, "y": 6133542.709495614}
        }, {
            "attributes": {
                "OBJECTID": 214,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907243.3702152714, "y": 6133282.314010506}
        }, {
            "attributes": {
                "OBJECTID": 215,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907250.7328863922, "y": 6133302.387796385}
        }, {
            "attributes": {
                "OBJECTID": 216,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906783.1231201715, "y": 6135294.303871372}
        }, {
            "attributes": {
                "OBJECTID": 218,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906824.2556720169, "y": 6135259.69531034}
        }, {
            "attributes": {
                "OBJECTID": 219,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907327.297318962, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 220,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.7252739812, "y": 6135307.007955775}
        }, {
            "attributes": {
                "OBJECTID": 222,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906932.012939105, "y": 6135331.387966124}
        }, {
            "attributes": {
                "OBJECTID": 223,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906124.8497828958, "y": 6134696.311852438}
        }, {
            "attributes": {
                "OBJECTID": 224,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906916.8334133404, "y": 6135331.828629688}
        }, {
            "attributes": {
                "OBJECTID": 225,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906163.724775474, "y": 6134730.994912638}
        }, {
            "attributes": {
                "OBJECTID": 226,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906930.386561345, "y": 6135345.627753703}
        }, {
            "attributes": {
                "OBJECTID": 227,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906929.048501067, "y": 6135367.035051325}
        }, {
            "attributes": {
                "OBJECTID": 229,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907021.0050796329, "y": 6133327.906887838}
        }, {
            "attributes": {
                "OBJECTID": 230,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906808.2278917367, "y": 6135478.664334871}
        }, {
            "attributes": {
                "OBJECTID": 231,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906285.8834450825, "y": 6134777.45674723}
        }, {
            "attributes": {
                "OBJECTID": 232,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907082.3833072695, "y": 6133470.876618177}
        }, {
            "attributes": {
                "OBJECTID": 233,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906238.9934491746, "y": 6134782.579131111}
        }, {
            "attributes": {
                "OBJECTID": 234,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907141.4416367193, "y": 6133405.240612703}
        }, {
            "attributes": {
                "OBJECTID": 235,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907108.9679601442, "y": 6133409.968170566}
        }, {
            "attributes": {
                "OBJECTID": 236,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906998.839142627, "y": 6135537.040106047}
        }, {
            "attributes": {
                "OBJECTID": 237,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907084.4841286999, "y": 6133407.579609558}
        }, {
            "attributes": {
                "OBJECTID": 238,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906235.5636956634, "y": 6134717.622389816}
        }, {
            "attributes": {
                "OBJECTID": 239,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906977.0049377014, "y": 6135542.550203828}
        }, {
            "attributes": {
                "OBJECTID": 240,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906959.2828747688, "y": 6135585.821537337}
        }, {
            "attributes": {
                "OBJECTID": 241,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906182.8138417562, "y": 6134735.975398264}
        }, {
            "attributes": {
                "OBJECTID": 242,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906942.584951148, "y": 6135596.669868377}
        }, {
            "attributes": {
                "OBJECTID": 243,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.6280587597, "y": 6134722.437630584}
        }, {
            "attributes": {
                "OBJECTID": 244,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906903.8691454474, "y": 6135599.172047316}
        }, {
            "attributes": {
                "OBJECTID": 245,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906200.3911893498, "y": 6134625.310491835}
        }, {
            "attributes": {
                "OBJECTID": 247,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906279.8710793862, "y": 6134595.785181681}
        }, {
            "attributes": {
                "OBJECTID": 248,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906330.7685769657, "y": 6134693.991864491}
        }, {
            "attributes": {
                "OBJECTID": 250,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906426.239511859, "y": 6134918.412717605}
        }, {
            "attributes": {
                "OBJECTID": 251,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906713.7009461273, "y": 6137049.766073912}
        }, {
            "attributes": {
                "OBJECTID": 252,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906357.4006519476, "y": 6134635.658561328}
        }, {
            "attributes": {
                "OBJECTID": 254,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907261.9661362097, "y": 6134934.314244338}
        }, {
            "attributes": {
                "OBJECTID": 255,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907061.684561152, "y": 6133558.022706246}
        }, {
            "attributes": {
                "OBJECTID": 257,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907155.4244779577, "y": 6133633.741394827}
        }, {
            "attributes": {
                "OBJECTID": 258,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906515.113653722, "y": 6134709.809521383}
        }, {
            "attributes": {
                "OBJECTID": 259,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907404.9471165736, "y": 6134828.777530707}
        }, {
            "attributes": {
                "OBJECTID": 260,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906474.230457531, "y": 6134671.312763659}
        }, {
            "attributes": {
                "OBJECTID": 261,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.4669114826, "y": 6134801.351217088}
        }, {
            "attributes": {
                "OBJECTID": 262,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907489.5298920665, "y": 6134815.782067106}
        }, {
            "attributes": {
                "OBJECTID": 264,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907002.439214955, "y": 6133632.401309067}
        }, {
            "attributes": {
                "OBJECTID": 265,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906881.4082117847, "y": 6133364.375023093}
        }, {
            "attributes": {
                "OBJECTID": 266,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906878.7654870776, "y": 6133357.804973257}
        }, {
            "attributes": {
                "OBJECTID": 267,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906858.7335447075, "y": 6133331.408008984}
        }, {
            "attributes": {
                "OBJECTID": 268,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906857.6069914591, "y": 6133314.6733971}
        }, {
            "attributes": {
                "OBJECTID": 269,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906839.1958608762, "y": 6133306.835108379}
        }, {
            "attributes": {
                "OBJECTID": 270,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906885.807558064, "y": 6133332.19567801}
        }, {
            "attributes": {
                "OBJECTID": 271,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906341.568793962, "y": 6134184.148874081}
        }, {
            "attributes": {
                "OBJECTID": 272,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906240.8458055027, "y": 6134243.305239685}
        }, {
            "attributes": {
                "OBJECTID": 273,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906611.289240988, "y": 6133728.605981251}
        }, {
            "attributes": {
                "OBJECTID": 274,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906257.9856674985, "y": 6134261.473644381}
        }, {
            "attributes": {
                "OBJECTID": 275,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906606.4924841279, "y": 6133714.28043343}
        }, {
            "attributes": {
                "OBJECTID": 276,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906272.658689577, "y": 6134249.328547244}
        }, {
            "attributes": {
                "OBJECTID": 277,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906322.3912286905, "y": 6134071.191976742}
        }, {
            "attributes": {
                "OBJECTID": 278,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906292.777461149, "y": 6134288.335783156}
        }, {
            "attributes": {
                "OBJECTID": 280,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906289.5447431349, "y": 6134293.983602368}
        }, {
            "attributes": {
                "OBJECTID": 282,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906315.0179822159, "y": 6134350.530427965}
        }, {
            "attributes": {
                "OBJECTID": 283,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906324.766230025, "y": 6134342.868103432}
        }, {
            "attributes": {
                "OBJECTID": 284,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906306.3528730506, "y": 6134443.448550367}
        }, {
            "attributes": {
                "OBJECTID": 285,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906015.5017602881, "y": 6134271.30472677}
        }, {
            "attributes": {
                "OBJECTID": 286,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906884.470610982, "y": 6133865.520977125}
        }, {
            "attributes": {
                "OBJECTID": 287,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906793.7763954375, "y": 6133941.070487846}
        }, {
            "attributes": {
                "OBJECTID": 288,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906214.3205972344, "y": 6134337.337081016}
        }, {
            "attributes": {
                "OBJECTID": 289,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906569.3841318712, "y": 6134001.880743126}
        }, {
            "attributes": {
                "OBJECTID": 290,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906641.476860498, "y": 6134204.942427686}
        }, {
            "attributes": {
                "OBJECTID": 291,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906646.5263126008, "y": 6134234.992114218}
        }, {
            "attributes": {
                "OBJECTID": 293,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906670.6381143113, "y": 6134252.963562831}
        }, {
            "attributes": {
                "OBJECTID": 294,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906672.5116213406, "y": 6134236.984860286}
        }, {
            "attributes": {
                "OBJECTID": 295,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906701.2220312066, "y": 6134225.198625232}
        }, {
            "attributes": {
                "OBJECTID": 297,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906216.3811210108, "y": 6134438.957253705}
        }, {
            "attributes": {
                "OBJECTID": 298,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906876.6415111914, "y": 6133975.334928264}
        }, {
            "attributes": {
                "OBJECTID": 299,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906230.7680519987, "y": 6134486.682616858}
        }, {
            "attributes": {
                "OBJECTID": 300,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907012.8698512467, "y": 6134003.135771743}
        }, {
            "attributes": {
                "OBJECTID": 302,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907000.916364322, "y": 6134046.592920031}
        }, {
            "attributes": {
                "OBJECTID": 304,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906156.8641552562, "y": 6134537.604429045}
        }, {
            "attributes": {
                "OBJECTID": 305,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907035.7894212017, "y": 6134129.914637219}
        }, {
            "attributes": {
                "OBJECTID": 306,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907059.290078904, "y": 6134122.134015094}
        }, {
            "attributes": {
                "OBJECTID": 307,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906046.097922331, "y": 6134429.866182182}
        }, {
            "attributes": {
                "OBJECTID": 309,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906069.3358660352, "y": 6134415.622910897}
        }, {
            "attributes": {
                "OBJECTID": 310,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907106.5329576058, "y": 6134155.070695309}
        }, {
            "attributes": {
                "OBJECTID": 311,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907167.741979615, "y": 6134108.146603881}
        }, {
            "attributes": {
                "OBJECTID": 312,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907173.686440425, "y": 6134094.808432774}
        }, {
            "attributes": {
                "OBJECTID": 313,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905962.716284141, "y": 6134358.117654796}
        }, {
            "attributes": {
                "OBJECTID": 314,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907179.438318515, "y": 6134089.164082843}
        }, {
            "attributes": {
                "OBJECTID": 315,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907188.0900693368, "y": 6134077.146069259}
        }, {
            "attributes": {
                "OBJECTID": 316,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905916.2448495151, "y": 6134318.535970863}
        }, {
            "attributes": {
                "OBJECTID": 317,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907189.068567665, "y": 6134082.401549034}
        }, {
            "attributes": {
                "OBJECTID": 318,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905888.5173907478, "y": 6134298.403056877}
        }, {
            "attributes": {
                "OBJECTID": 319,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907150.5030432697, "y": 6134094.501348002}
        }, {
            "attributes": {
                "OBJECTID": 320,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907204.9516326063, "y": 6134078.995250095}
        }, {
            "attributes": {
                "OBJECTID": 321,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905896.0459279153, "y": 6134249.665679012}
        }, {
            "attributes": {
                "OBJECTID": 322,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905954.5376411567, "y": 6134179.789560949}
        }, {
            "attributes": {
                "OBJECTID": 323,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907336.0960115148, "y": 6134150.990111642}
        }, {
            "attributes": {
                "OBJECTID": 324,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905968.5616706077, "y": 6134157.120167109}
        }, {
            "attributes": {
                "OBJECTID": 326,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907385.1812277888, "y": 6134116.900207198}
        }, {
            "attributes": {
                "OBJECTID": 329,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906008.651158826, "y": 6134122.5529201375}
        }, {
            "attributes": {
                "OBJECTID": 330,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906020.9619813086, "y": 6134105.81843063}
        }, {
            "attributes": {
                "OBJECTID": 331,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906036.5322384853, "y": 6134141.17669137}
        }, {
            "attributes": {
                "OBJECTID": 332,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906031.5095030628, "y": 6134153.471840617}
        }, {
            "attributes": {
                "OBJECTID": 333,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906043.8225519375, "y": 6134199.947230371}
        }, {
            "attributes": {
                "OBJECTID": 334,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906049.8237856883, "y": 6134262.646931442}
        }, {
            "attributes": {
                "OBJECTID": 335,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906090.5689457082, "y": 6134303.919033328}
        }, {
            "attributes": {
                "OBJECTID": 336,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906144.7793113354, "y": 6134309.394957787}
        }, {
            "attributes": {
                "OBJECTID": 337,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906066.9925907555, "y": 6134079.327368352}
        }, {
            "attributes": {
                "OBJECTID": 338,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906059.9638781059, "y": 6134023.146159797}
        }, {
            "attributes": {
                "OBJECTID": 339,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905773.6910020383, "y": 6134301.15103078}
        }, {
            "attributes": {
                "OBJECTID": 340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906158.7499074328, "y": 6133923.748898265}
        }, {
            "attributes": {
                "OBJECTID": 341,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906178.0983481251, "y": 6133936.018701617}
        }, {
            "attributes": {
                "OBJECTID": 342,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906188.9920734921, "y": 6133947.51748596}
        }, {
            "attributes": {
                "OBJECTID": 343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906208.0021029364, "y": 6134014.556206834}
        }, {
            "attributes": {
                "OBJECTID": 344,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906801.247046468, "y": 6135170.4704985265}
        }, {
            "attributes": {
                "OBJECTID": 347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906399.385911092, "y": 6132915.121723553}
        }, {
            "attributes": {
                "OBJECTID": 348,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906491.7187495374, "y": 6133016.828476875}
        }, {
            "attributes": {
                "OBJECTID": 351,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906485.8844950222, "y": 6133159.943200547}
        }, {
            "attributes": {
                "OBJECTID": 359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905966.8651615635, "y": 6134033.423406463}
        }, {
            "attributes": {
                "OBJECTID": 360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905985.8295500178, "y": 6134041.72465369}
        }, {
            "attributes": {
                "OBJECTID": 361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905870.0851094637, "y": 6133872.007971832}
        }, {
            "attributes": {
                "OBJECTID": 366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906070.799717336, "y": 6133845.282319519}
        }, {
            "attributes": {
                "OBJECTID": 367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910120.8412387487, "y": 6135953.935843512}
        }, {
            "attributes": {
                "OBJECTID": 368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906065.837094442, "y": 6133848.002611272}
        }, {
            "attributes": {
                "OBJECTID": 369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909934.4120384865, "y": 6136045.222586026}
        }, {
            "attributes": {
                "OBJECTID": 371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905995.7792861008, "y": 6133860.102078953}
        }, {
            "attributes": {
                "OBJECTID": 372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910014.880445601, "y": 6136065.760246598}
        }, {
            "attributes": {
                "OBJECTID": 375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910059.0768437947, "y": 6136019.056879912}
        }, {
            "attributes": {
                "OBJECTID": 377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910132.6074862834, "y": 6135966.526225806}
        }, {
            "attributes": {
                "OBJECTID": 378,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910083.1014823418, "y": 6135959.959186392}
        }, {
            "attributes": {
                "OBJECTID": 379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910094.3647884205, "y": 6135969.744644521}
        }, {
            "attributes": {
                "OBJECTID": 382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1910006.2676565996, "y": 6135914.218744822}
        }, {
            "attributes": {
                "OBJECTID": 392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906859.6085159031, "y": 6137216.622397439}
        }, {
            "attributes": {
                "OBJECTID": 397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906860.7662386084, "y": 6137238.151243906}
        }, {
            "attributes": {
                "OBJECTID": 404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906770.481010882, "y": 6137270.244268141}
        }, {
            "attributes": {
                "OBJECTID": 406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906787.8820284002, "y": 6137212.496444865}
        }, {
            "attributes": {
                "OBJECTID": 408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906727.4879763827, "y": 6137189.626853192}
        }, {
            "attributes": {
                "OBJECTID": 411,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906717.9237396885, "y": 6137095.055301927}
        }, {
            "attributes": {
                "OBJECTID": 413,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906794.406352437, "y": 6137063.648271751}
        }, {
            "attributes": {
                "OBJECTID": 1340,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906695.915097124, "y": 6137479.032426407}
        }, {
            "attributes": {
                "OBJECTID": 1343,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904966.246541477, "y": 6136399.846780123}
        }, {
            "attributes": {
                "OBJECTID": 1347,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908042.77273318, "y": 6133905.679007986}
        }, {
            "attributes": {
                "OBJECTID": 1353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907258.779059185, "y": 6137671.14382304}
        }, {
            "attributes": {
                "OBJECTID": 1354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907259.2187711743, "y": 6137663.60875678}
        }, {
            "attributes": {
                "OBJECTID": 1355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907388.412832607, "y": 6137766.827887203}
        }, {
            "attributes": {
                "OBJECTID": 1358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907269.2508836829, "y": 6137859.3539988715}
        }, {
            "attributes": {
                "OBJECTID": 1359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907315.52773184, "y": 6137882.661834108}
        }, {
            "attributes": {
                "OBJECTID": 1360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906767.8877120249, "y": 6137156.780836513}
        }, {
            "attributes": {
                "OBJECTID": 1362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906877.1898710004, "y": 6137235.290967833}
        }, {
            "attributes": {
                "OBJECTID": 1365,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907858.0486135606, "y": 6137428.283611665}
        }, {
            "attributes": {
                "OBJECTID": 1366,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907819.7524823379, "y": 6137391.93506388}
        }, {
            "attributes": {
                "OBJECTID": 1367,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907778.9282854795, "y": 6137305.85351642}
        }, {
            "attributes": {
                "OBJECTID": 1368,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907763.7376277635, "y": 6137379.217866931}
        }, {
            "attributes": {
                "OBJECTID": 1369,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907611.6729769527, "y": 6137459.161048759}
        }, {
            "attributes": {
                "OBJECTID": 1370,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907870.510273959, "y": 6137209.943540874}
        }, {
            "attributes": {
                "OBJECTID": 1371,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907581.783693674, "y": 6137390.519258433}
        }, {
            "attributes": {
                "OBJECTID": 1372,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907552.2328216438, "y": 6137343.243511785}
        }, {
            "attributes": {
                "OBJECTID": 1373,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907566.5333687093, "y": 6137240.561743476}
        }, {
            "attributes": {
                "OBJECTID": 1375,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.2001773324, "y": 6137213.031200798}
        }, {
            "attributes": {
                "OBJECTID": 1376,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907779.0677688005, "y": 6137338.635492823}
        }, {
            "attributes": {
                "OBJECTID": 1377,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907472.560794167, "y": 6137245.394932402}
        }, {
            "attributes": {
                "OBJECTID": 1379,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907517.7794392481, "y": 6137325.04352088}
        }, {
            "attributes": {
                "OBJECTID": 1380,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907353.5542472599, "y": 6137229.295944471}
        }, {
            "attributes": {
                "OBJECTID": 1381,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907439.834644986, "y": 6137206.0257838685}
        }, {
            "attributes": {
                "OBJECTID": 1382,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907406.4755331797, "y": 6137197.233960351}
        }, {
            "attributes": {
                "OBJECTID": 1384,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.1271984961, "y": 6136987.293039824}
        }, {
            "attributes": {
                "OBJECTID": 1386,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.3372909485, "y": 6136976.401208523}
        }, {
            "attributes": {
                "OBJECTID": 1387,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907229.928052802, "y": 6136949.479378961}
        }, {
            "attributes": {
                "OBJECTID": 1390,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907233.8601911713, "y": 6136936.972694761}
        }, {
            "attributes": {
                "OBJECTID": 1392,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907657.6569435264, "y": 6136912.49845904}
        }, {
            "attributes": {
                "OBJECTID": 1393,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907360.652757226, "y": 6137114.5289873695}
        }, {
            "attributes": {
                "OBJECTID": 1394,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907534.4651177218, "y": 6136979.402971807}
        }, {
            "attributes": {
                "OBJECTID": 1395,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907612.0781798977, "y": 6136946.168268726}
        }, {
            "attributes": {
                "OBJECTID": 1396,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907845.3893610672, "y": 6136764.746161338}
        }, {
            "attributes": {
                "OBJECTID": 1397,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907248.0523130537, "y": 6135691.834975468}
        }, {
            "attributes": {
                "OBJECTID": 1398,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907277.2224724204, "y": 6135685.78394481}
        }, {
            "attributes": {
                "OBJECTID": 1399,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907305.1881548974, "y": 6135726.328435803}
        }, {
            "attributes": {
                "OBJECTID": 1401,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907311.9730778649, "y": 6135723.829558209}
        }, {
            "attributes": {
                "OBJECTID": 1402,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907345.7552037367, "y": 6135701.641827347}
        }, {
            "attributes": {
                "OBJECTID": 1404,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907356.1413122215, "y": 6135691.971854008}
        }, {
            "attributes": {
                "OBJECTID": 1406,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907362.6824455007, "y": 6135673.121029386}
        }, {
            "attributes": {
                "OBJECTID": 1407,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907357.245601573, "y": 6135674.14260847}
        }, {
            "attributes": {
                "OBJECTID": 1408,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907375.4396591475, "y": 6135611.110405456}
        }, {
            "attributes": {
                "OBJECTID": 1439,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904889.3960178106, "y": 6133530.835768434}
        }, {
            "attributes": {
                "OBJECTID": 1440,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904888.875042598, "y": 6133497.215603691}
        }, {
            "attributes": {
                "OBJECTID": 1442,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904940.096479893, "y": 6133419.400431476}
        }, {
            "attributes": {
                "OBJECTID": 1444,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904375.7489629807, "y": 6133433.388386225}
        }, {
            "attributes": {
                "OBJECTID": 1446,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904392.6049602774, "y": 6133433.707128955}
        }, {
            "attributes": {
                "OBJECTID": 1448,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904422.776995059, "y": 6133390.925618779}
        }, {
            "attributes": {
                "OBJECTID": 1449,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903842.1389838622, "y": 6133831.448898312}
        }, {
            "attributes": {
                "OBJECTID": 1451,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903846.3513133947, "y": 6133828.002645931}
        }, {
            "attributes": {
                "OBJECTID": 1453,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903126.560599116, "y": 6134120.0511727985}
        }, {
            "attributes": {
                "OBJECTID": 1454,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902672.4639058828, "y": 6134271.89303993}
        }, {
            "attributes": {
                "OBJECTID": 1455,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902422.3301232648, "y": 6134458.788407438}
        }, {
            "attributes": {
                "OBJECTID": 1456,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902934.4253843962, "y": 6134391.781256603}
        }, {
            "attributes": {
                "OBJECTID": 1457,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902817.5543906, "y": 6134545.286956214}
        }, {
            "attributes": {
                "OBJECTID": 1458,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.532016836, "y": 6134538.984713131}
        }, {
            "attributes": {
                "OBJECTID": 1459,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.050825941, "y": 6134536.220807139}
        }, {
            "attributes": {
                "OBJECTID": 1460,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902830.703448855, "y": 6134511.081988187}
        }, {
            "attributes": {
                "OBJECTID": 1461,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902834.7220824712, "y": 6134478.062156511}
        }, {
            "attributes": {
                "OBJECTID": 1462,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902858.7771112348, "y": 6134458.925266265}
        }, {
            "attributes": {
                "OBJECTID": 1463,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902835.2953778482, "y": 6134496.741778757}
        }, {
            "attributes": {
                "OBJECTID": 1464,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902650.9336031675, "y": 6135065.051050501}
        }, {
            "attributes": {
                "OBJECTID": 1466,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902929.2991218474, "y": 6134619.765934589}
        }, {
            "attributes": {
                "OBJECTID": 1467,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902911.1251017842, "y": 6134655.688787508}
        }, {
            "attributes": {
                "OBJECTID": 1468,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902925.145791648, "y": 6134679.993504531}
        }, {
            "attributes": {
                "OBJECTID": 1469,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.8280886612, "y": 6135227.255127575}
        }, {
            "attributes": {
                "OBJECTID": 1470,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902880.7827481735, "y": 6134890.542137745}
        }, {
            "attributes": {
                "OBJECTID": 1471,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902822.806444178, "y": 6134888.338933716}
        }, {
            "attributes": {
                "OBJECTID": 1473,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902759.9688180112, "y": 6134828.119912373}
        }, {
            "attributes": {
                "OBJECTID": 1474,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902800.611564101, "y": 6134861.635144575}
        }, {
            "attributes": {
                "OBJECTID": 1475,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902821.9270201991, "y": 6134888.474130314}
        }, {
            "attributes": {
                "OBJECTID": 1476,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902793.7487174913, "y": 6134913.881113372}
        }, {
            "attributes": {
                "OBJECTID": 1477,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902752.4202433447, "y": 6135020.605620167}
        }, {
            "attributes": {
                "OBJECTID": 1478,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902789.9048554748, "y": 6135168.799680777}
        }, {
            "attributes": {
                "OBJECTID": 1479,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902836.1814809956, "y": 6135152.682398705}
        }, {
            "attributes": {
                "OBJECTID": 1480,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902856.578551294, "y": 6135145.313125429}
        }, {
            "attributes": {
                "OBJECTID": 1481,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902960.628879334, "y": 6135187.093567133}
        }, {
            "attributes": {
                "OBJECTID": 1482,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902954.121141903, "y": 6135190.570411448}
        }, {
            "attributes": {
                "OBJECTID": 1483,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902965.48129594, "y": 6135239.41496557}
        }, {
            "attributes": {
                "OBJECTID": 1484,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903034.0685738053, "y": 6135135.168075113}
        }, {
            "attributes": {
                "OBJECTID": 1485,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909983.7232333224, "y": 6138224.425820209}
        }, {
            "attributes": {
                "OBJECTID": 1486,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.855051162, "y": 6138223.562562364}
        }, {
            "attributes": {
                "OBJECTID": 1487,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909969.0190417874, "y": 6138231.215003898}
        }, {
            "attributes": {
                "OBJECTID": 1488,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903004.929583895, "y": 6135091.641973164}
        }, {
            "attributes": {
                "OBJECTID": 1489,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909985.4864227388, "y": 6138232.956381955}
        }, {
            "attributes": {
                "OBJECTID": 1490,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902915.3107146362, "y": 6134989.585089844}
        }, {
            "attributes": {
                "OBJECTID": 1491,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1909957.8269801824, "y": 6138223.904859957}
        }, {
            "attributes": {
                "OBJECTID": 1492,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903092.6938704338, "y": 6134455.9477529125}
        }, {
            "attributes": {
                "OBJECTID": 1493,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903075.566253579, "y": 6134433.209198546}
        }, {
            "attributes": {
                "OBJECTID": 1494,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903077.3417994608, "y": 6134431.890684693}
        }, {
            "attributes": {
                "OBJECTID": 1495,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903283.5411186484, "y": 6134381.989257241}
        }, {
            "attributes": {
                "OBJECTID": 1496,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903289.4455044349, "y": 6134396.416062326}
        }, {
            "attributes": {
                "OBJECTID": 1497,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903390.1206255197, "y": 6134501.041168628}
        }, {
            "attributes": {
                "OBJECTID": 1498,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903373.257949054, "y": 6134490.6248322055}
        }, {
            "attributes": {
                "OBJECTID": 1499,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903244.264262712, "y": 6134572.216746877}
        }, {
            "attributes": {
                "OBJECTID": 1500,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902797.3613689276, "y": 6134939.809933671}
        }, {
            "attributes": {
                "OBJECTID": 1501,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903056.639713756, "y": 6134750.037274313}
        }, {
            "attributes": {
                "OBJECTID": 1502,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903579.9426212208, "y": 6134383.576471645}
        }, {
            "attributes": {
                "OBJECTID": 1503,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903607.5687792532, "y": 6134374.612302446}
        }, {
            "attributes": {
                "OBJECTID": 1504,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903611.4059621012, "y": 6134478.185663522}
        }, {
            "attributes": {
                "OBJECTID": 1505,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903588.2593003819, "y": 6134357.957431719}
        }, {
            "attributes": {
                "OBJECTID": 1506,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903590.3843894573, "y": 6134359.527951768}
        }, {
            "attributes": {
                "OBJECTID": 1507,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903391.6813247846, "y": 6134605.185201541}
        }, {
            "attributes": {
                "OBJECTID": 1508,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903361.4536302513, "y": 6134763.913906735}
        }, {
            "attributes": {
                "OBJECTID": 1509,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903179.1579453263, "y": 6134819.265436932}
        }, {
            "attributes": {
                "OBJECTID": 1510,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903174.6094309313, "y": 6135005.324844478}
        }, {
            "attributes": {
                "OBJECTID": 1511,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903759.4553188828, "y": 6135490.97642825}
        }, {
            "attributes": {
                "OBJECTID": 1512,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.2662390522, "y": 6135389.946343954}
        }, {
            "attributes": {
                "OBJECTID": 1513,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903841.786101075, "y": 6135412.795937644}
        }, {
            "attributes": {
                "OBJECTID": 1514,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904046.4046834921, "y": 6135180.286767989}
        }, {
            "attributes": {
                "OBJECTID": 1515,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904386.544727194, "y": 6135084.997155731}
        }, {
            "attributes": {
                "OBJECTID": 1516,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904404.317997095, "y": 6135091.795533436}
        }, {
            "attributes": {
                "OBJECTID": 1517,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903951.8053802196, "y": 6135410.080156165}
        }, {
            "attributes": {
                "OBJECTID": 1518,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903956.7546447767, "y": 6135410.422341251}
        }, {
            "attributes": {
                "OBJECTID": 1519,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1904650.9752720164, "y": 6135173.122776307}
        }, {
            "attributes": {
                "OBJECTID": 1520,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905105.4938661188, "y": 6134594.496685447}
        }, {
            "attributes": {
                "OBJECTID": 1521,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908198.8777249127, "y": 6135018.369000285}
        }, {
            "attributes": {
                "OBJECTID": 1522,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908225.6991543393, "y": 6135553.104195939}
        }, {
            "attributes": {
                "OBJECTID": 1523,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908192.9232453469, "y": 6134974.260972653}
        }, {
            "attributes": {
                "OBJECTID": 1524,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.5945018777, "y": 6134987.166544743}
        }, {
            "attributes": {
                "OBJECTID": 1525,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908193.356278168, "y": 6134986.236848839}
        }, {
            "attributes": {
                "OBJECTID": 1526,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908194.4171529151, "y": 6134974.304369521}
        }, {
            "attributes": {
                "OBJECTID": 1527,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908242.6919632927, "y": 6135033.399430952}
        }, {
            "attributes": {
                "OBJECTID": 1529,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908307.5377930657, "y": 6135053.283704777}
        }, {
            "attributes": {
                "OBJECTID": 1530,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908348.8061546963, "y": 6135021.895849664}
        }, {
            "attributes": {
                "OBJECTID": 1531,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908421.2829355677, "y": 6134980.997505271}
        }, {
            "attributes": {
                "OBJECTID": 1532,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.776502847, "y": 6134973.229462425}
        }, {
            "attributes": {
                "OBJECTID": 1533,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908483.2333453852, "y": 6134952.398991281}
        }, {
            "attributes": {
                "OBJECTID": 1534,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908520.9517284546, "y": 6134922.533725532}
        }, {
            "attributes": {
                "OBJECTID": 1535,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908539.6478369322, "y": 6134905.7776429085}
        }, {
            "attributes": {
                "OBJECTID": 1536,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908642.8666083806, "y": 6134867.037985868}
        }, {
            "attributes": {
                "OBJECTID": 1537,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.0250864744, "y": 6134830.900603435}
        }, {
            "attributes": {
                "OBJECTID": 1538,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.1657252351, "y": 6134818.991707774}
        }, {
            "attributes": {
                "OBJECTID": 1539,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908967.673505419, "y": 6134831.73347567}
        }, {
            "attributes": {
                "OBJECTID": 1540,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908989.629048591, "y": 6134849.454145098}
        }, {
            "attributes": {
                "OBJECTID": 1541,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908976.5812910767, "y": 6134934.841680811}
        }, {
            "attributes": {
                "OBJECTID": 1542,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908955.3537773762, "y": 6134976.871461869}
        }, {
            "attributes": {
                "OBJECTID": 1543,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908885.9516408436, "y": 6135020.704098223}
        }, {
            "attributes": {
                "OBJECTID": 1544,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908838.8512510892, "y": 6135039.581861178}
        }, {
            "attributes": {
                "OBJECTID": 1545,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908807.899979874, "y": 6135046.62222588}
        }, {
            "attributes": {
                "OBJECTID": 1547,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908737.2121032153, "y": 6135096.797927737}
        }, {
            "attributes": {
                "OBJECTID": 1548,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908713.7303698289, "y": 6135115.103344178}
        }, {
            "attributes": {
                "OBJECTID": 1549,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908695.8992137972, "y": 6135130.078863059}
        }, {
            "attributes": {
                "OBJECTID": 1550,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908696.9556357616, "y": 6135127.373186116}
        }, {
            "attributes": {
                "OBJECTID": 1551,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908658.3333384313, "y": 6135152.40532059}
        }, {
            "attributes": {
                "OBJECTID": 1552,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908628.4629794687, "y": 6135158.803156662}
        }, {
            "attributes": {
                "OBJECTID": 1553,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908589.6959667997, "y": 6135190.166476511}
        }, {
            "attributes": {
                "OBJECTID": 1554,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908579.6293452473, "y": 6135197.549141636}
        }, {
            "attributes": {
                "OBJECTID": 1555,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908534.7943071306, "y": 6135274.145293947}
        }, {
            "attributes": {
                "OBJECTID": 1556,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908516.985414996, "y": 6135277.956007558}
        }, {
            "attributes": {
                "OBJECTID": 1557,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908234.7854964575, "y": 6135541.266071969}
        }, {
            "attributes": {
                "OBJECTID": 1558,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908457.3382054411, "y": 6135322.596398862}
        }, {
            "attributes": {
                "OBJECTID": 1559,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908442.7353146344, "y": 6135330.675226228}
        }, {
            "attributes": {
                "OBJECTID": 1560,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908420.9467507047, "y": 6135351.070960913}
        }, {
            "attributes": {
                "OBJECTID": 1561,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908350.7453402267, "y": 6135378.826197038}
        }, {
            "attributes": {
                "OBJECTID": 1562,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908314.4173375997, "y": 6135392.0228184955}
        }, {
            "attributes": {
                "OBJECTID": 1563,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908321.6375197736, "y": 6135399.171970646}
        }, {
            "attributes": {
                "OBJECTID": 1564,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908326.3073724087, "y": 6135414.949200769}
        }, {
            "attributes": {
                "OBJECTID": 1565,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908320.5666262703, "y": 6135413.904283873}
        }, {
            "attributes": {
                "OBJECTID": 1566,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905629.8977233479, "y": 6133368.219931417}
        }, {
            "attributes": {
                "OBJECTID": 1567,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908268.660574102, "y": 6135410.233722159}
        }, {
            "attributes": {
                "OBJECTID": 1568,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905646.6757970024, "y": 6133345.279004463}
        }, {
            "attributes": {
                "OBJECTID": 1569,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908213.391560119, "y": 6135427.69018661}
        }, {
            "attributes": {
                "OBJECTID": 1570,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905644.3035786513, "y": 6133334.613755583}
        }, {
            "attributes": {
                "OBJECTID": 1571,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908207.5528528271, "y": 6135439.666697211}
        }, {
            "attributes": {
                "OBJECTID": 1572,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908220.2777838216, "y": 6135415.059367735}
        }, {
            "attributes": {
                "OBJECTID": 1573,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908212.1625929405, "y": 6135411.597455}
        }, {
            "attributes": {
                "OBJECTID": 1574,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908168.4463157142, "y": 6135374.8251510095}
        }, {
            "attributes": {
                "OBJECTID": 1575,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908143.8580665844, "y": 6135347.8026993135}
        }, {
            "attributes": {
                "OBJECTID": 1576,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905662.9640648954, "y": 6133380.595741787}
        }, {
            "attributes": {
                "OBJECTID": 1577,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908132.1517089354, "y": 6135296.27683397}
        }, {
            "attributes": {
                "OBJECTID": 1578,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908136.7146948632, "y": 6135269.224585225}
        }, {
            "attributes": {
                "OBJECTID": 1579,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908128.0651704266, "y": 6135177.2939813575}
        }, {
            "attributes": {
                "OBJECTID": 1580,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905663.7488673017, "y": 6133415.146642566}
        }, {
            "attributes": {
                "OBJECTID": 1581,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908184.1501562786, "y": 6135167.227343104}
        }, {
            "attributes": {
                "OBJECTID": 1582,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908170.156183089, "y": 6135103.971870363}
        }, {
            "attributes": {
                "OBJECTID": 1583,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1908233.726291504, "y": 6135131.611134524}
        }, {
            "attributes": {
                "OBJECTID": 1593,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907263.2685742478, "y": 6136995.320014502}
        }, {
            "attributes": {
                "OBJECTID": 1594,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907249.2345260475, "y": 6136957.85808126}
        }, {
            "attributes": {
                "OBJECTID": 1610,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905477.7707336233, "y": 6134690.765580139}
        }, {
            "attributes": {
                "OBJECTID": 1611,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905468.0825983358, "y": 6134672.796550506}
        }, {
            "attributes": {
                "OBJECTID": 1612,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905438.4025957016, "y": 6134664.00399058}
        }, {
            "attributes": {
                "OBJECTID": 1613,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905410.192010347, "y": 6134537.370765492}
        }, {
            "attributes": {
                "OBJECTID": 1616,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905981.2031119806, "y": 6135472.533332942}
        }, {
            "attributes": {
                "OBJECTID": 1617,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906021.5185787673, "y": 6135418.474544364}
        }, {
            "attributes": {
                "OBJECTID": 1618,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906029.670505078, "y": 6135361.20458282}
        }, {
            "attributes": {
                "OBJECTID": 1619,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905909.9753357936, "y": 6135347.352019825}
        }, {
            "attributes": {
                "OBJECTID": 1620,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1905887.0501998595, "y": 6135363.070732916}
        }, {
            "attributes": {
                "OBJECTID": 1628,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907333.6091340915, "y": 6133675.410990547}
        }, {
            "attributes": {
                "OBJECTID": 1632,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907039.4418137001, "y": 6133793.149680456}
        }, {
            "attributes": {
                "OBJECTID": 1633,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.4497159247, "y": 6133772.23196134}
        }, {
            "attributes": {
                "OBJECTID": 1634,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906967.641855332, "y": 6133711.139630361}
        }, {
            "attributes": {
                "OBJECTID": 1635,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906749.0370920892, "y": 6133820.035383028}
        }, {
            "attributes": {
                "OBJECTID": 1636,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906601.0689985368, "y": 6133930.58974538}
        }, {
            "attributes": {
                "OBJECTID": 1637,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906538.92934558, "y": 6133593.118365306}
        }, {
            "attributes": {
                "OBJECTID": 1640,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906519.387208972, "y": 6133277.613056725}
        }, {
            "attributes": {
                "OBJECTID": 1642,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906536.4602792775, "y": 6133245.852899886}
        }, {
            "attributes": {
                "OBJECTID": 1652,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907683.6605086594, "y": 6133713.6657905225}
        }, {
            "attributes": {
                "OBJECTID": 1662,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907458.5296402746, "y": 6134402.983571297}
        }, {
            "attributes": {
                "OBJECTID": 1663,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907494.839831775, "y": 6134405.27844539}
        }, {
            "attributes": {
                "OBJECTID": 1677,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902794.0759967945, "y": 6134668.470369554}
        }, {
            "attributes": {
                "OBJECTID": 1678,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902809.3835399735, "y": 6134640.68405572}
        }, {
            "attributes": {
                "OBJECTID": 1680,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902609.4335856838, "y": 6134897.078813746}
        }, {
            "attributes": {
                "OBJECTID": 1682,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902775.7383370767, "y": 6134690.985895434}
        }, {
            "attributes": {
                "OBJECTID": 1684,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902738.2437061905, "y": 6134712.952359928}
        }, {
            "attributes": {
                "OBJECTID": 1686,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902933.2131151415, "y": 6134531.198712125}
        }, {
            "attributes": {
                "OBJECTID": 1687,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902945.8712544453, "y": 6134502.448151118}
        }, {
            "attributes": {
                "OBJECTID": 1692,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903176.0755086234, "y": 6134283.929685646}
        }, {
            "attributes": {
                "OBJECTID": 1694,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903125.9539078907, "y": 6134356.151584372}
        }, {
            "attributes": {
                "OBJECTID": 1695,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903108.6370479036, "y": 6134330.864754544}
        }, {
            "attributes": {
                "OBJECTID": 1696,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902665.4132632974, "y": 6134874.89389344}
        }, {
            "attributes": {
                "OBJECTID": 1697,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902648.0225984836, "y": 6134743.629729349}
        }, {
            "attributes": {
                "OBJECTID": 1698,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902402.0421460716, "y": 6134785.054366907}
        }, {
            "attributes": {
                "OBJECTID": 1702,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1902252.2417337024, "y": 6134821.815791976}
        }, {
            "attributes": {
                "OBJECTID": 2353,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907196.2063734136, "y": 6133563.3679844495}
        }, {
            "attributes": {
                "OBJECTID": 2354,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 1,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907065.5206308044, "y": 6133668.30166154}
        }, {
            "attributes": {
                "OBJECTID": 2355,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 2,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907546.3807560152, "y": 6134177.045798393}
        }, {
            "attributes": {
                "OBJECTID": 2356,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903819.111433998, "y": 6135545.524756725}
        }, {
            "attributes": {
                "OBJECTID": 2357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1903750.4261949789, "y": 6135770.717437156}
        }, {
            "attributes": {
                "OBJECTID": 3357,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907047.0182182423, "y": 6134141.835925885}
        }, {
            "attributes": {
                "OBJECTID": 3358,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1907026.738033407, "y": 6134184.374183202}
        }, {
            "attributes": {
                "OBJECTID": 3359,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906975.8917427901, "y": 6134203.897658475}
        }, {
            "attributes": {
                "OBJECTID": 3360,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906926.492605556, "y": 6134246.064044205}
        }, {
            "attributes": {
                "OBJECTID": 3361,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906907.7786859581, "y": 6134210.206330721}
        }, {
            "attributes": {
                "OBJECTID": 3362,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906945.934554625, "y": 6134212.754835351}
        }, {
            "attributes": {
                "OBJECTID": 3363,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906965.3976543956, "y": 6134176.066121831}
        }, {
            "attributes": {
                "OBJECTID": 3364,
                "POZN": "pondelok, streda, piatok",
                "SLUZ_ZOD": 6,
                "DRU_ODP": 4,
                "UDRZV_DATE": null
            }, "geometry": {"type": "point", "x": 1906990.6315565712, "y": 6134155.175839216}
        }]
    };
}());


