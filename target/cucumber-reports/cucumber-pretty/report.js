$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetOperation.feature");
formatter.feature({
  "line": 2,
  "name": "Verify GET operations using REST-assured",
  "description": "",
  "id": "verify-get-operations-using-rest-assured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GetStation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify get operation",
  "description": "",
  "id": "verify-get-operations-using-rest-assured;verify-get-operation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I perform GET operation for \"/stations\" with appid \"\u003cScenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the station response values",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "verify-get-operations-using-rest-assured;verify-get-operation;",
  "rows": [
    {
      "cells": [
        "ScenarioName"
      ],
      "line": 9,
      "id": "verify-get-operations-using-rest-assured;verify-get-operation;;1"
    },
    {
      "cells": [
        "GetStation01"
      ],
      "line": 10,
      "id": "verify-get-operations-using-rest-assured;verify-get-operation;;2"
    },
    {
      "cells": [
        "GetStation02"
      ],
      "line": 11,
      "id": "verify-get-operations-using-rest-assured;verify-get-operation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8024874369,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify get operation",
  "description": "",
  "id": "verify-get-operations-using-rest-assured;verify-get-operation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GetStation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I perform GET operation for \"/stations\" with appid \"GetStation01\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the station response values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/stations",
      "offset": 29
    },
    {
      "val": "GetStation01",
      "offset": 52
    }
  ],
  "location": "GetPostStepDef.iPerformGETOperationForWithAppid(String,String)"
});
formatter.result({
  "duration": 16588818103,
  "status": "passed"
});
formatter.match({
  "location": "GetPostStepDef.verifyTheStationResponseValues()"
});
formatter.result({
  "duration": 19491067713,
  "status": "passed"
});
formatter.after({
  "duration": 3133555,
  "status": "passed"
});
formatter.before({
  "duration": 6322624,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify get operation",
  "description": "",
  "id": "verify-get-operations-using-rest-assured;verify-get-operation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GetStation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I perform GET operation for \"/stations\" with appid \"GetStation02\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the station response values",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/stations",
      "offset": 29
    },
    {
      "val": "GetStation02",
      "offset": 52
    }
  ],
  "location": "GetPostStepDef.iPerformGETOperationForWithAppid(String,String)"
});
formatter.result({
  "duration": 765641648,
  "status": "passed"
});
formatter.match({
  "location": "GetPostStepDef.verifyTheStationResponseValues()"
});
formatter.result({
  "duration": 104741059,
  "status": "passed"
});
formatter.after({
  "duration": 73709,
  "status": "passed"
});
formatter.uri("PostOperation.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Post operations using REST-assured",
  "description": "",
  "id": "verify-post-operations-using-rest-assured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterStation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successfully register two stations with post operation",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I perform POST operation for \"/stations\" with appid \"\u003cScenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the reponse status code",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;",
  "rows": [
    {
      "cells": [
        "ScenarioName"
      ],
      "line": 10,
      "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;;1"
    },
    {
      "cells": [
        "RegisterStation01"
      ],
      "line": 11,
      "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;;2"
    },
    {
      "cells": [
        "RegisterStation02"
      ],
      "line": 12,
      "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3352815,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successfully register two stations with post operation",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterStation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I perform POST operation for \"/stations\" with appid \"RegisterStation01\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the reponse status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/stations",
      "offset": 30
    },
    {
      "val": "RegisterStation01",
      "offset": 53
    }
  ],
  "location": "GetPostStepDef.iPerformPOSTOperationForWithAppid(String,String)"
});
formatter.result({
  "duration": 3881360645,
  "status": "passed"
});
formatter.match({
  "location": "GetPostStepDef.verifyTheReponseStatusCode()"
});
formatter.result({
  "duration": 866311,
  "status": "passed"
});
formatter.after({
  "duration": 201066,
  "status": "passed"
});
formatter.before({
  "duration": 6831587,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successfully register two stations with post operation",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;successfully-register-two-stations-with-post-operation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterStation"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I perform POST operation for \"/stations\" with appid \"RegisterStation02\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the reponse status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/stations",
      "offset": 30
    },
    {
      "val": "RegisterStation02",
      "offset": 53
    }
  ],
  "location": "GetPostStepDef.iPerformPOSTOperationForWithAppid(String,String)"
});
formatter.result({
  "duration": 710904042,
  "status": "passed"
});
formatter.match({
  "location": "GetPostStepDef.verifyTheReponseStatusCode()"
});
formatter.result({
  "duration": 769744,
  "status": "passed"
});
formatter.after({
  "duration": 202466,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Register station without and API key",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;register-station-without-and-api-key",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "I perform POST operation for \"/stations\" with appid \"\u003cScenarioName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "verify the reponse status code",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;register-station-without-and-api-key;",
  "rows": [
    {
      "cells": [
        "ScenarioName"
      ],
      "line": 20,
      "id": "verify-post-operations-using-rest-assured;register-station-without-and-api-key;;1"
    },
    {
      "cells": [
        "RegisterWithoutKey01"
      ],
      "line": 21,
      "id": "verify-post-operations-using-rest-assured;register-station-without-and-api-key;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6437386,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Register station without and API key",
  "description": "",
  "id": "verify-post-operations-using-rest-assured;register-station-without-and-api-key;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterStation"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I perform POST operation for \"/stations\" with appid \"RegisterWithoutKey01\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "verify the reponse status code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/stations",
      "offset": 30
    },
    {
      "val": "RegisterWithoutKey01",
      "offset": 53
    }
  ],
  "location": "GetPostStepDef.iPerformPOSTOperationForWithAppid(String,String)"
});
formatter.result({
  "duration": 401624485,
  "status": "passed"
});
formatter.match({
  "location": "GetPostStepDef.verifyTheReponseStatusCode()"
});
formatter.result({
  "duration": 504299,
  "status": "passed"
});
formatter.after({
  "duration": 97034,
  "status": "passed"
});
});