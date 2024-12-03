window.BENCHMARK_DATA = {
  "lastUpdate": 1733198362901,
  "repoUrl": "https://github.com/willcollins10/xgi",
  "entries": {
    "XGI Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "distinct": true,
          "id": "a9c77e41ca65c5e5f1bc8e26e19e6a84604f8fb9",
          "message": "fix filepath",
          "timestamp": "2024-11-24T17:12:48-05:00",
          "tree_id": "2b02c7e7df0788890df8989a8c880a3d018d6cdb",
          "url": "https://github.com/xgi-org/xgi/commit/a9c77e41ca65c5e5f1bc8e26e19e6a84604f8fb9"
        },
        "date": 1732486432762,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 20.580113092208133,
            "unit": "iter/sec",
            "range": "stddev: 0.048336137203109794",
            "extra": "mean: 48.590597899999466 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 36.58853665194456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006728024576353108",
            "extra": "mean: 27.330964599997287 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 19.532958981309505,
            "unit": "iter/sec",
            "range": "stddev: 0.032778676406075874",
            "extra": "mean: 51.195520400000305 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1114.1343766431821,
            "unit": "iter/sec",
            "range": "stddev: 0.0001448175660616618",
            "extra": "mean: 897.557799996207 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 48.62219031870955,
            "unit": "iter/sec",
            "range": "stddev: 0.037878147975698585",
            "extra": "mean: 20.566741100003583 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 12718.552426598237,
            "unit": "iter/sec",
            "range": "stddev: 0.000005305626298380904",
            "extra": "mean: 78.62529999158596 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 225.46954483639777,
            "unit": "iter/sec",
            "range": "stddev: 0.00007244383276464813",
            "extra": "mean: 4.4351888000022655 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10627.760560577382,
            "unit": "iter/sec",
            "range": "stddev: 0.000004928701833156152",
            "extra": "mean: 94.09320000202115 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9284.654508179154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043083294642210265",
            "extra": "mean: 107.70460000628646 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 244.52905964998385,
            "unit": "iter/sec",
            "range": "stddev: 0.00008746664573124768",
            "extra": "mean: 4.08949350000114 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8503.987094210906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004266138105069425",
            "extra": "mean: 117.59190000191211 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 187.3340243959503,
            "unit": "iter/sec",
            "range": "stddev: 0.00011485338898010783",
            "extra": "mean: 5.338058600003137 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 12.281298550084468,
            "unit": "iter/sec",
            "range": "stddev: 0.04496261710571643",
            "extra": "mean: 81.424614499997 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.60323548802993,
            "unit": "iter/sec",
            "range": "stddev: 0.06391991868746723",
            "extra": "mean: 94.31083569999998 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "distinct": true,
          "id": "60bb6799649be52d2cc5cc3173f22f1d049202d5",
          "message": "update",
          "timestamp": "2024-11-24T17:21:08-05:00",
          "tree_id": "471e24faaa0d33dcbb9210fa8181bb3fb32451f5",
          "url": "https://github.com/xgi-org/xgi/commit/60bb6799649be52d2cc5cc3173f22f1d049202d5"
        },
        "date": 1732487064990,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 25.7342034510147,
            "unit": "iter/sec",
            "range": "stddev: 0.03770966362325038",
            "extra": "mean: 38.858789700000216 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 24.308225305997464,
            "unit": "iter/sec",
            "range": "stddev: 0.03821804354536747",
            "extra": "mean: 41.1383384599975 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 20.726033517878996,
            "unit": "iter/sec",
            "range": "stddev: 0.02659419560901577",
            "extra": "mean: 48.248498640001 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1263.1363017555707,
            "unit": "iter/sec",
            "range": "stddev: 0.000042030199425375033",
            "extra": "mean: 791.6801999991208 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 67.35283938870829,
            "unit": "iter/sec",
            "range": "stddev: 0.027562038779780897",
            "extra": "mean: 14.847184009998102 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13299.68159219077,
            "unit": "iter/sec",
            "range": "stddev: 0.000004558205668727357",
            "extra": "mean: 75.18977000074756 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 231.5094121273792,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242361609786864",
            "extra": "mean: 4.319478810000987 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10857.29411460062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071479240978061495",
            "extra": "mean: 92.10398000135456 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9644.905445298073,
            "unit": "iter/sec",
            "range": "stddev: 0.000007661843140323563",
            "extra": "mean: 103.68167999899924 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 258.49310369873774,
            "unit": "iter/sec",
            "range": "stddev: 0.0002800744818155445",
            "extra": "mean: 3.868575159999068 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8493.111407244665,
            "unit": "iter/sec",
            "range": "stddev: 0.00000668349495631835",
            "extra": "mean: 117.7424799993787 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 192.98064439070106,
            "unit": "iter/sec",
            "range": "stddev: 0.00022813097843320831",
            "extra": "mean: 5.181866829998967 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 12.80768880026752,
            "unit": "iter/sec",
            "range": "stddev: 0.03962380542504712",
            "extra": "mean: 78.07809945999878 msec\nrounds: 100"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 13.007486449721082,
            "unit": "iter/sec",
            "range": "stddev: 0.04473471458958939",
            "extra": "mean: 76.8788038999989 msec\nrounds: 100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "distinct": true,
          "id": "71b897f9395dea85bac449f81aaec866694ae1b0",
          "message": "fix iterations",
          "timestamp": "2024-11-24T18:42:53-05:00",
          "tree_id": "f8b4518c0a36fa3e23fad901a571a61f1d69f345",
          "url": "https://github.com/xgi-org/xgi/commit/71b897f9395dea85bac449f81aaec866694ae1b0"
        },
        "date": 1732491843998,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 92.23766121817006,
            "unit": "iter/sec",
            "range": "stddev: 0.00015448424147658773",
            "extra": "mean: 10.841558500000303 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 56.800834649645914,
            "unit": "iter/sec",
            "range": "stddev: 0.00040275855308559053",
            "extra": "mean: 17.605375099998355 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.96773649079654,
            "unit": "iter/sec",
            "range": "stddev: 0.05246381300469888",
            "extra": "mean: 50.08078910000222 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 36.5385924449952,
            "unit": "iter/sec",
            "range": "stddev: 0.000608732922034258",
            "extra": "mean: 27.368323000000316 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 20.180950270697924,
            "unit": "iter/sec",
            "range": "stddev: 0.03138025041200466",
            "extra": "mean: 49.55168049999941 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1275.8242781696467,
            "unit": "iter/sec",
            "range": "stddev: 0.00002325155676281878",
            "extra": "mean: 783.8070000005359 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 119.8984397867633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727181484078093",
            "extra": "mean: 8.340392100001282 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13999.955199635115,
            "unit": "iter/sec",
            "range": "stddev: 0.000003764670406816324",
            "extra": "mean: 71.4288000025931 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 234.11846834645945,
            "unit": "iter/sec",
            "range": "stddev: 0.000056508410083019674",
            "extra": "mean: 4.271341799999107 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 11145.898699826887,
            "unit": "iter/sec",
            "range": "stddev: 0.000006307138131506437",
            "extra": "mean: 89.71909999644367 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 10186.100047659114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036204724955588704",
            "extra": "mean: 98.17300000207752 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 266.63496199198687,
            "unit": "iter/sec",
            "range": "stddev: 0.00019995406235429262",
            "extra": "mean: 3.750445900001864 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 7999.270466434904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001203358529176826",
            "extra": "mean: 125.0114000015401 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 185.2959372531518,
            "unit": "iter/sec",
            "range": "stddev: 0.00045870380997684073",
            "extra": "mean: 5.396772400000316 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 9.951700545942318,
            "unit": "iter/sec",
            "range": "stddev: 0.06622935553861015",
            "extra": "mean: 100.48533870000114 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.235818969621151,
            "unit": "iter/sec",
            "range": "stddev: 0.07080257275813118",
            "extra": "mean: 97.69613969999824 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 30.844487427403482,
            "unit": "iter/sec",
            "range": "stddev: 0.0012947020100274567",
            "extra": "mean: 32.4207040999994 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "distinct": true,
          "id": "ade37fb034f308f2a06789b0ffa447789f996db1",
          "message": "fix syntax error",
          "timestamp": "2024-12-02T18:39:55-05:00",
          "tree_id": "61abb61633952e7989abd7a1d9f1f3c1c5074880",
          "url": "https://github.com/xgi-org/xgi/commit/ade37fb034f308f2a06789b0ffa447789f996db1"
        },
        "date": 1733182900633,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 90.67354247767133,
            "unit": "iter/sec",
            "range": "stddev: 0.00010948006320670888",
            "extra": "mean: 11.028575399998886 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 56.66627948486963,
            "unit": "iter/sec",
            "range": "stddev: 0.00111645565947214",
            "extra": "mean: 17.647179399999402 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.968585740411235,
            "unit": "iter/sec",
            "range": "stddev: 0.05141806114954402",
            "extra": "mean: 50.0786591999983 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 35.85804008473057,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890896044718541",
            "extra": "mean: 27.887748399997747 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 19.738234611743678,
            "unit": "iter/sec",
            "range": "stddev: 0.03092689628698586",
            "extra": "mean: 50.66309219999994 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1274.2775356077866,
            "unit": "iter/sec",
            "range": "stddev: 0.000018542018401796288",
            "extra": "mean: 784.7584000003849 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 118.7249557126253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415036294183851",
            "extra": "mean: 8.422828999999865 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13413.546341372548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032588621480755636",
            "extra": "mean: 74.55149999486821 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 227.84086400174024,
            "unit": "iter/sec",
            "range": "stddev: 0.00014505376051092634",
            "extra": "mean: 4.389028299999609 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10535.798007445383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069930346799349515",
            "extra": "mean: 94.91450000211898 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9208.849336033189,
            "unit": "iter/sec",
            "range": "stddev: 0.000008614414668051977",
            "extra": "mean: 108.59119999793165 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 254.9764909126118,
            "unit": "iter/sec",
            "range": "stddev: 0.00017615410390433065",
            "extra": "mean: 3.9219301999992244 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8466.411205853285,
            "unit": "iter/sec",
            "range": "stddev: 0.000007542297680097357",
            "extra": "mean: 118.11380001347516 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 189.5960027703423,
            "unit": "iter/sec",
            "range": "stddev: 0.000189387692537369",
            "extra": "mean: 5.2743727999967405 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.653184519055372,
            "unit": "iter/sec",
            "range": "stddev: 0.0615543725148747",
            "extra": "mean: 93.86864540000204 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.569125051460395,
            "unit": "iter/sec",
            "range": "stddev: 0.06475647148697551",
            "extra": "mean: 94.6152112999954 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 40.31546366533193,
            "unit": "iter/sec",
            "range": "stddev: 0.001047120543829645",
            "extra": "mean: 24.804377999996063 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97421170+willcollins10@users.noreply.github.com",
            "name": "Will Collins",
            "username": "willcollins10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa48672b24cfdb4aff124f579b6728c897124434",
          "message": "Merge pull request #1 from willcollins10/test-benchmarks\n\ntest: Added function to core.py to best understand the workflow",
          "timestamp": "2024-12-02T21:53:29-05:00",
          "tree_id": "a12a58476c5c6427f0b9ba5629178aa1395df593",
          "url": "https://github.com/willcollins10/xgi/commit/fa48672b24cfdb4aff124f579b6728c897124434"
        },
        "date": 1733194942123,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 90.04720652766088,
            "unit": "iter/sec",
            "range": "stddev: 0.00026443257048871117",
            "extra": "mean: 11.105286199997977 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 57.339124049698775,
            "unit": "iter/sec",
            "range": "stddev: 0.00031995719475788094",
            "extra": "mean: 17.44009899999952 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.858854975558103,
            "unit": "iter/sec",
            "range": "stddev: 0.05209401552836894",
            "extra": "mean: 50.35537050000016 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 36.11253422583365,
            "unit": "iter/sec",
            "range": "stddev: 0.00036773423329335917",
            "extra": "mean: 27.69121640000094 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 20.19097056081582,
            "unit": "iter/sec",
            "range": "stddev: 0.03110754172340169",
            "extra": "mean: 49.52708919999509 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1280.4923646789402,
            "unit": "iter/sec",
            "range": "stddev: 0.000014638559606869676",
            "extra": "mean: 780.9496000007243 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 119.30470506377452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884350579887146",
            "extra": "mean: 8.381899100001533 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13868.43295035138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036254926330307423",
            "extra": "mean: 72.10619999966639 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 230.87528421899356,
            "unit": "iter/sec",
            "range": "stddev: 0.00008689672497041156",
            "extra": "mean: 4.331342800000471 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10858.506064808338,
            "unit": "iter/sec",
            "range": "stddev: 0.000006999787668863357",
            "extra": "mean: 92.09370000178296 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9879.392377100114,
            "unit": "iter/sec",
            "range": "stddev: 0.00000482026312307596",
            "extra": "mean: 101.22080000769529 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 261.5363008459547,
            "unit": "iter/sec",
            "range": "stddev: 0.00023561584595074484",
            "extra": "mean: 3.8235610000043607 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8957.32283554081,
            "unit": "iter/sec",
            "range": "stddev: 0.000004960402875502533",
            "extra": "mean: 111.64049999763392 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 197.95790975348984,
            "unit": "iter/sec",
            "range": "stddev: 0.00021473143455759348",
            "extra": "mean: 5.051578900005893 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.17523603253362,
            "unit": "iter/sec",
            "range": "stddev: 0.0667844517564485",
            "extra": "mean: 98.27781850000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.336992477405767,
            "unit": "iter/sec",
            "range": "stddev: 0.06938113840535197",
            "extra": "mean: 96.73993689999918 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 40.502445144769865,
            "unit": "iter/sec",
            "range": "stddev: 0.001185010057569682",
            "extra": "mean: 24.6898673999965 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wilcol@umich.edu",
            "name": "will collins",
            "username": "willcollins10"
          },
          "committer": {
            "email": "wilcol@umich.edu",
            "name": "will collins",
            "username": "willcollins10"
          },
          "distinct": true,
          "id": "69f6f6b4c9f622b93202bbf0a9880fa7cfbdb0ea",
          "message": "test: Add pedantic benchmark test to understand workflow",
          "timestamp": "2024-12-02T22:17:56-05:00",
          "tree_id": "bf299ea85a7cccf47e70fc6add87476be1000ea8",
          "url": "https://github.com/willcollins10/xgi/commit/69f6f6b4c9f622b93202bbf0a9880fa7cfbdb0ea"
        },
        "date": 1733195955839,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 88.00918196269477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003046175426257054",
            "extra": "mean: 11.362450800007196 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 57.010574366946685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003788342138897812",
            "extra": "mean: 17.54060559999857 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_simple_benchmark",
            "value": 17957.9639968643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018281266203321963",
            "extra": "mean: 55.685600003130276 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.799551949602083,
            "unit": "iter/sec",
            "range": "stddev: 0.05305242474515509",
            "extra": "mean: 50.50619340000253 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 35.54469600322135,
            "unit": "iter/sec",
            "range": "stddev: 0.000883632292994687",
            "extra": "mean: 28.133592700001486 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 19.762118830354417,
            "unit": "iter/sec",
            "range": "stddev: 0.03151142000819128",
            "extra": "mean: 50.601861499993106 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1186.6185500803049,
            "unit": "iter/sec",
            "range": "stddev: 0.000033063173073815565",
            "extra": "mean: 842.730799996616 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 116.05165575252347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548000344135984",
            "extra": "mean: 8.616852499997663 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 12325.911901473848,
            "unit": "iter/sec",
            "range": "stddev: 0.000007592079238108186",
            "extra": "mean: 81.12990000199716 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 217.95235160622184,
            "unit": "iter/sec",
            "range": "stddev: 0.00040487332574524093",
            "extra": "mean: 4.588158799987241 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 9207.975948297608,
            "unit": "iter/sec",
            "range": "stddev: 0.000013018555983020307",
            "extra": "mean: 108.60150000553404 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 8892.311441393087,
            "unit": "iter/sec",
            "range": "stddev: 0.000008388395058750677",
            "extra": "mean: 112.45669999198071 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 231.1947785487138,
            "unit": "iter/sec",
            "range": "stddev: 0.00012944101995395908",
            "extra": "mean: 4.325357200008284 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 7369.620361611658,
            "unit": "iter/sec",
            "range": "stddev: 0.000012040934925045068",
            "extra": "mean: 135.69219999567395 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 169.98384473527713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003882725517568512",
            "extra": "mean: 5.882912000004126 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.276178208430906,
            "unit": "iter/sec",
            "range": "stddev: 0.06359362071026468",
            "extra": "mean: 97.31244239999342 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.247963601020526,
            "unit": "iter/sec",
            "range": "stddev: 0.06856435096119155",
            "extra": "mean: 97.58036220000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 41.30202605067252,
            "unit": "iter/sec",
            "range": "stddev: 0.00015640535848576755",
            "extra": "mean: 24.211887299986756 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wilcol@umich.edu",
            "name": "will collins",
            "username": "willcollins10"
          },
          "committer": {
            "email": "wilcol@umich.edu",
            "name": "will collins",
            "username": "willcollins10"
          },
          "distinct": true,
          "id": "5df4b753a210db7608b5110c40ed3e1401a41e9f",
          "message": "Attempting to change results from data.js",
          "timestamp": "2024-12-02T22:54:28-05:00",
          "tree_id": "6155854cf78bb56b798e8517a269ae8ac39cd332",
          "url": "https://github.com/willcollins10/xgi/commit/5df4b753a210db7608b5110c40ed3e1401a41e9f"
        },
        "date": 1733198142266,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 89.49014733616289,
            "unit": "iter/sec",
            "range": "stddev: 0.00029368536928213587",
            "extra": "mean: 11.174414499996033 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 51.85874768239263,
            "unit": "iter/sec",
            "range": "stddev: 0.0018557175079774216",
            "extra": "mean: 19.283149800000388 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_simple_benchmark",
            "value": 18218.686177403415,
            "unit": "iter/sec",
            "range": "stddev: 6.752179986644834e-7",
            "extra": "mean: 54.88870000078805 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.849453644975757,
            "unit": "iter/sec",
            "range": "stddev: 0.05151505683381167",
            "extra": "mean: 50.37922040000922 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 35.682403868733324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004629015121282904",
            "extra": "mean: 28.025017700005606 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 19.702002483950153,
            "unit": "iter/sec",
            "range": "stddev: 0.03085634434197658",
            "extra": "mean: 50.75626199999874 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1248.738773834584,
            "unit": "iter/sec",
            "range": "stddev: 0.000022984049438607863",
            "extra": "mean: 800.808000002462 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 116.78893904107042,
            "unit": "iter/sec",
            "range": "stddev: 0.0006101973125729549",
            "extra": "mean: 8.562454699998057 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 12877.752781221228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063571001549697104",
            "extra": "mean: 77.65329999642745 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 229.84674439657948,
            "unit": "iter/sec",
            "range": "stddev: 0.00009826453469229285",
            "extra": "mean: 4.350725100002251 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 9916.719390735301,
            "unit": "iter/sec",
            "range": "stddev: 0.000008909561652882228",
            "extra": "mean: 100.83979999819803 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9320.307272083252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061863844929655615",
            "extra": "mean: 107.29259999777696 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 241.59666987050633,
            "unit": "iter/sec",
            "range": "stddev: 0.0001874922468133784",
            "extra": "mean: 4.139129899994032 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8167.112182849304,
            "unit": "iter/sec",
            "range": "stddev: 0.000007977162296750232",
            "extra": "mean: 122.44229999680556 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 182.31472425670086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002854439975746674",
            "extra": "mean: 5.4850205000008145 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.418081094810018,
            "unit": "iter/sec",
            "range": "stddev: 0.06402551952444632",
            "extra": "mean: 95.98696639999957 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.442741299707777,
            "unit": "iter/sec",
            "range": "stddev: 0.06638810133956174",
            "extra": "mean: 95.760296200001 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 39.64226832916682,
            "unit": "iter/sec",
            "range": "stddev: 0.0012858255911749994",
            "extra": "mean: 25.225599899999906 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "will collins",
            "username": "willcollins10",
            "email": "wilcol@umich.edu"
          },
          "committer": {
            "name": "will collins",
            "username": "willcollins10",
            "email": "wilcol@umich.edu"
          },
          "id": "5df4b753a210db7608b5110c40ed3e1401a41e9f",
          "message": "Attempting to change results from data.js",
          "timestamp": "2024-12-03T03:54:28Z",
          "url": "https://github.com/willcollins10/xgi/commit/5df4b753a210db7608b5110c40ed3e1401a41e9f"
        },
        "date": 1733198360699,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 80.30662289282124,
            "unit": "iter/sec",
            "range": "stddev: 0.0013213693012457805",
            "extra": "mean: 12.452273099998479 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 50.715532515798195,
            "unit": "iter/sec",
            "range": "stddev: 0.003180319489177876",
            "extra": "mean: 19.71782510000253 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_simple_benchmark",
            "value": 18227.087639090223,
            "unit": "iter/sec",
            "range": "stddev: 6.735125478374172e-7",
            "extra": "mean: 54.86340000118162 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.709907298039656,
            "unit": "iter/sec",
            "range": "stddev: 0.053281219595298995",
            "extra": "mean: 50.73590579999632 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 36.142339708985766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007139032111148931",
            "extra": "mean: 27.66838029999974 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 19.75095074213164,
            "unit": "iter/sec",
            "range": "stddev: 0.03184464944248982",
            "extra": "mean: 50.630474100006495 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1195.2737918168375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007994882117919551",
            "extra": "mean: 836.6283999919233 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 117.74321624525743,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333838219410966",
            "extra": "mean: 8.493058299995937 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 12983.505754670698,
            "unit": "iter/sec",
            "range": "stddev: 0.000005646618378169168",
            "extra": "mean: 77.02079999774014 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 227.8094878457655,
            "unit": "iter/sec",
            "range": "stddev: 0.00011763301688413118",
            "extra": "mean: 4.389632800004506 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 9455.772985905007,
            "unit": "iter/sec",
            "range": "stddev: 0.000016059793103994886",
            "extra": "mean: 105.7554999988497 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9082.940874310529,
            "unit": "iter/sec",
            "range": "stddev: 0.000007322306253691703",
            "extra": "mean: 110.09650000346483 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 245.915630330828,
            "unit": "iter/sec",
            "range": "stddev: 0.00020006071871839795",
            "extra": "mean: 4.0664353000039455 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8316.201957183746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040180312189068655",
            "extra": "mean: 120.24720000169964 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 180.19783956830884,
            "unit": "iter/sec",
            "range": "stddev: 0.0003580723907390473",
            "extra": "mean: 5.5494561000045906 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.341329938029284,
            "unit": "iter/sec",
            "range": "stddev: 0.06325492674319312",
            "extra": "mean: 96.69936129999996 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.232003862843372,
            "unit": "iter/sec",
            "range": "stddev: 0.0701599634784651",
            "extra": "mean: 97.73256670000023 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 40.816810667964404,
            "unit": "iter/sec",
            "range": "stddev: 0.00025966169417878315",
            "extra": "mean: 24.49970940000128 msec\nrounds: 10"
          }
        ]
      }
    ],
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8039e7fcdeabf77f1f8d3dba37f1a1e366d8da",
          "message": "Modify changelog generator (#626)\n\n* modify changelog generator\r\n\r\n* Changed the formatting of the changelog generator.\r\n\r\n* update\r\n\r\n* Update HOW_TO_CONTRIBUTE.md\r\n\r\n* Update check-urls.yml\r\n\r\n* remove unused dependency",
          "timestamp": "2024-11-26T14:09:39-05:00",
          "tree_id": "82366c5a589a7661b863f28fd860fc5f0569adb3",
          "url": "https://github.com/xgi-org/xgi/commit/be8039e7fcdeabf77f1f8d3dba37f1a1e366d8da"
        },
        "date": 1732722763282,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 91.50512953508559,
            "unit": "iter/sec",
            "range": "stddev: 0.00021251527630285276",
            "extra": "mean: 10.928349099998513 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 57.44556210083509,
            "unit": "iter/sec",
            "range": "stddev: 0.00036858183914411",
            "extra": "mean: 17.407785099999273 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 20.253986325281836,
            "unit": "iter/sec",
            "range": "stddev: 0.050445329220540666",
            "extra": "mean: 49.372996700000726 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 36.460942265666766,
            "unit": "iter/sec",
            "range": "stddev: 0.00032022659907138105",
            "extra": "mean: 27.426608800004715 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 20.23170907022532,
            "unit": "iter/sec",
            "range": "stddev: 0.029990868787670932",
            "extra": "mean: 49.427361599998676 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1293.2406321192216,
            "unit": "iter/sec",
            "range": "stddev: 0.000013528577437488455",
            "extra": "mean: 773.2513000007657 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 119.37603816121816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606722295711288",
            "extra": "mean: 8.376890499997103 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13184.923830595184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033705551059319125",
            "extra": "mean: 75.84420000057435 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 231.74731496387682,
            "unit": "iter/sec",
            "range": "stddev: 0.00006497615594572562",
            "extra": "mean: 4.315044600002693 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10752.873167927415,
            "unit": "iter/sec",
            "range": "stddev: 0.000009399630716875031",
            "extra": "mean: 92.9983999981232 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 10186.017042578962,
            "unit": "iter/sec",
            "range": "stddev: 0.000005830485444734796",
            "extra": "mean: 98.17380000640696 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 260.7945607018073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627370806488222",
            "extra": "mean: 3.8344357999989143 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 8817.377994133934,
            "unit": "iter/sec",
            "range": "stddev: 0.000008451186898689532",
            "extra": "mean: 113.41239999751451 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 176.2140837590171,
            "unit": "iter/sec",
            "range": "stddev: 0.0004784791640199272",
            "extra": "mean: 5.674915300002681 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 10.64208488088802,
            "unit": "iter/sec",
            "range": "stddev: 0.06167937430842019",
            "extra": "mean: 93.96654990000002 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 10.523377186242078,
            "unit": "iter/sec",
            "range": "stddev: 0.06682000865930143",
            "extra": "mean: 95.02652829999931 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 31.069288493308285,
            "unit": "iter/sec",
            "range": "stddev: 0.002561211250297945",
            "extra": "mean: 32.18612490000794 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicholas.landry.91@gmail.com",
            "name": "Nicholas Landry",
            "username": "nwlandry"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3569948dafd7e39efae8347c1c0c2ded180c3cc",
          "message": "Integrate HIF with more of XGI (#613)\n\n* move hif functionality to convert\r\n\r\n* format with isort and black\r\n\r\n* add docs\r\n\r\n* add collection handling\r\n\r\n* add warning\r\n\r\n* add docstrings\r\n\r\n* added HIF to `load_xgi_data`\r\n\r\n* added more close to tests\r\n\r\n* Update xgi_data.py\r\n\r\n* Update xgi_data.py\r\n\r\n* remove other changes\r\n\r\n* added unit tests\r\n\r\n* Update xgi_data.py\r\n\r\n* Update HOW_TO_CONTRIBUTE.md\r\n\r\n* response to review\r\n\r\n* Response to review\r\n\r\n* Update docs.txt\r\n\r\n* Update release.txt",
          "timestamp": "2024-12-02T16:21:39-05:00",
          "tree_id": "c065879a4c02bc1d7016e06ea7d20c4d5d30b319",
          "url": "https://github.com/xgi-org/xgi/commit/c3569948dafd7e39efae8347c1c0c2ded180c3cc"
        },
        "date": 1733174876220,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/algorithms.py::test_connected",
            "value": 84.7107039666093,
            "unit": "iter/sec",
            "range": "stddev: 0.0021422348075570727",
            "extra": "mean: 11.804883600001403 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/algorithms.py::test_clustering_coefficient",
            "value": 51.96739623763352,
            "unit": "iter/sec",
            "range": "stddev: 0.0013726666389160267",
            "extra": "mean: 19.242834400000675 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgelist",
            "value": 19.47743817509476,
            "unit": "iter/sec",
            "range": "stddev: 0.05325011854793626",
            "extra": "mean: 51.34145420000209 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_edgedict",
            "value": 35.74876079780611,
            "unit": "iter/sec",
            "range": "stddev: 0.0004541957195242786",
            "extra": "mean: 27.97299759999987 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_construct_from_df",
            "value": 20.047008028654385,
            "unit": "iter/sec",
            "range": "stddev: 0.030763794125184214",
            "extra": "mean: 49.882755500004805 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_memberships",
            "value": 1257.2938760942845,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555074951672886",
            "extra": "mean: 795.3590000028044 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_members",
            "value": 114.72968275561176,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066067333557977",
            "extra": "mean: 8.71614020000493 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_node_attributes",
            "value": 13518.665219931454,
            "unit": "iter/sec",
            "range": "stddev: 0.00000148755524347939",
            "extra": "mean: 73.97180000623393 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_attributes",
            "value": 232.51027486117326,
            "unit": "iter/sec",
            "range": "stddev: 0.00007011409839004795",
            "extra": "mean: 4.300885200007087 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_degree",
            "value": 10817.710755929134,
            "unit": "iter/sec",
            "range": "stddev: 0.000005977132920896104",
            "extra": "mean: 92.44100000103117 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_nodestats_degree",
            "value": 9613.36026431445,
            "unit": "iter/sec",
            "range": "stddev: 0.00000638399057823358",
            "extra": "mean: 104.0218999918352 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_edge_size",
            "value": 224.04974119295818,
            "unit": "iter/sec",
            "range": "stddev: 0.000095546846281856",
            "extra": "mean: 4.463294600009249 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_isolates",
            "value": 7297.741276020338,
            "unit": "iter/sec",
            "range": "stddev: 0.000008298729047935285",
            "extra": "mean: 137.0287000014514 usec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_singletons",
            "value": 159.71538973094727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485163075350578",
            "extra": "mean: 6.261137399999939 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_copy",
            "value": 9.787473699883556,
            "unit": "iter/sec",
            "range": "stddev: 0.0687294509248274",
            "extra": "mean: 102.17141120000122 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/core.py::test_dual",
            "value": 9.785901023772807,
            "unit": "iter/sec",
            "range": "stddev: 0.07139927470695101",
            "extra": "mean: 102.18783099999769 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/generators.py::test_erdos_renyi",
            "value": 30.272798510402954,
            "unit": "iter/sec",
            "range": "stddev: 0.0016330891622332012",
            "extra": "mean: 33.032955299998434 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}