let jsonObj = {
    name: "Aashiqui",
    channel: "FP",
    friend: "arun",
    food: "curd Rice",
  };
  console.log(jsonObj);
  let myJsonStr = JSON.stringify(jsonObj);
  console.log(myJsonStr);

  myJsonStr = myJsonStr.replace("curd Rice", "Biriyani");
  console.log(myJsonStr);

  newJsonObj = JSON.parse(myJsonStr);
  console.log(newJsonObj);