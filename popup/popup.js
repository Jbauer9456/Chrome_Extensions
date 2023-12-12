// popup.js
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the input field, button, and display divs
  var inputField = document.getElementById('inputField');
  var saveButton = document.getElementById('saveButton');
  var displayValueDiv = document.getElementById('displayValue');
  var displayTimeZoneDiv = document.getElementById('displayTimeZone');
  

  // Function to get the area code and time zone based on the input value
  function getAreaCodeAndTimeZone(inputValue) {
    // Check if the input value exists in the JSON object
    const area = areaCodeData.find(obj => obj.AreaCode === parseInt(inputValue));

    if (area) {
      // Display the saved value, area code, and time zone
      displayValueDiv.textContent = 'Searched Area Code: ' + inputValue;
      displayTimeZoneDiv.textContent = 'Time Zone: ' + area.Timezone;
    } else {
      // If input value is not found, display an error message
      displayValueDiv.textContent = 'Searched Area Code: ' + inputValue;
      displayTimeZoneDiv.textContent = 'Time Zone not found';
    }
  }

  // Add a click event listener to the button
  saveButton.addEventListener('click', function () {
    // Get the value from the input field
    var inputValue = inputField.value;

    // Call the getAreaCodeAndTimeZone function with the input value
    getAreaCodeAndTimeZone(inputValue);

    // Log the value to the console (you can remove this line if not needed)
    console.log('Input Value (Area Code):', inputValue);
  });
});

var areaCodeData = [
  {
    "AreaCode": 201,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 202,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 203,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 205,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 206,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 207,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 208,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 209,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 210,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 212,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 213,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 214,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 215,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 216,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 217,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 218,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 219,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 220,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 223,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 224,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 225,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 228,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 229,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 231,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 234,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 239,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 240,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 248,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 251,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 252,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 253,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 254,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 256,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 260,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 262,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 267,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 269,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 270,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 272,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 276,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 279,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 281,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 301,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 302,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 303,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 304,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 305,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 307,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 308,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 309,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 310,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 312,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 313,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 314,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 315,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 316,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 317,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 318,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 319,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 320,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 321,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 323,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 325,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 326,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 330,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 331,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 332,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 334,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 336,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 337,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 339,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 341,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 346,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 347,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 351,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 352,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 360,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 361,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 364,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 380,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 385,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 386,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 401,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 402,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 404,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 405,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 406,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 407,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 408,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 409,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 410,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 412,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 413,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 414,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 415,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 417,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 419,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 423,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 424,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 425,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 430,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 432,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 434,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 435,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 440,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 442,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 443,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 445,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 456,
    "Timezone": ""
  },
  {
    "AreaCode": 458,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 463,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 469,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 470,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 475,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 478,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 479,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 480,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 484,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 500,
    "Timezone": ""
  },
  {
    "AreaCode": 501,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 502,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 503,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 504,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 505,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 507,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 508,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 509,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 510,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 512,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 513,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 515,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 516,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 517,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 518,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 520,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 521,
    "Timezone": ""
  },
  {
    "AreaCode": 522,
    "Timezone": ""
  },
  {
    "AreaCode": 523,
    "Timezone": ""
  },
  {
    "AreaCode": 524,
    "Timezone": ""
  },
  {
    "AreaCode": 530,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 531,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 533,
    "Timezone": ""
  },
  {
    "AreaCode": 534,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 539,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 540,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 541,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 544,
    "Timezone": ""
  },
  {
    "AreaCode": 551,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 559,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 561,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 562,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 563,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 564,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 566,
    "Timezone": ""
  },
  {
    "AreaCode": 567,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 570,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 571,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 573,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 574,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 575,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 580,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 585,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 586,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 588,
    "Timezone": ""
  },
  {
    "AreaCode": 601,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 602,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 603,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 605,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 606,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 607,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 608,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 609,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 610,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 611,
    "Timezone": ""
  },
  {
    "AreaCode": 612,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 614,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 615,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 616,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 617,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 618,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 619,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 620,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 623,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 626,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 628,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 629,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 630,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 631,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 636,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 640,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 641,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 646,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 650,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 651,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 657,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 659,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 660,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 661,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 662,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 667,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 669,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 678,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 680,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 681,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 682,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 689,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 700,
    "Timezone": ""
  },
  {
    "AreaCode": 701,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 702,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 703,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 704,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 706,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 707,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 708,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 710,
    "Timezone": ""
  },
  {
    "AreaCode": 712,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 713,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 714,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 715,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 716,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 717,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 718,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 719,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 720,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 724,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 725,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 726,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 727,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 731,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 732,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 734,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 737,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 740,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 743,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 747,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 754,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 757,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 760,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 762,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 763,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 765,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 769,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 770,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 772,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 773,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 774,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 775,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 779,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 781,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 785,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 786,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 800,
    "Timezone": ""
  },
  {
    "AreaCode": 801,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 802,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 803,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 804,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 805,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 806,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 808,
    "Timezone": "HAST"
  },
  {
    "AreaCode": 809,
    "Timezone": "AST"
  },
  {
    "AreaCode": 810,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 812,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 813,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 814,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 815,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 816,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 817,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 818,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 820,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 828,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 830,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 831,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 832,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 833,
    "Timezone": ""
  },
  {
    "AreaCode": 838,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 843,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 844,
    "Timezone": ""
  },
  {
    "AreaCode": 845,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 847,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 848,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 850,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 854,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 855,
    "Timezone": ""
  },
  {
    "AreaCode": 856,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 857,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 858,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 859,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 860,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 862,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 863,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 864,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 865,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 866,
    "Timezone": ""
  },
  {
    "AreaCode": 870,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 872,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 877,
    "Timezone": ""
  },
  {
    "AreaCode": 878,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 880,
    "Timezone": ""
  },
  {
    "AreaCode": 881,
    "Timezone": ""
  },
  {
    "AreaCode": 888,
    "Timezone": ""
  },
  {
    "AreaCode": 900,
    "Timezone": ""
  },
  {
    "AreaCode": 901,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 903,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 904,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 906,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 907,
    "Timezone": "AKST"
  },
  {
    "AreaCode": 908,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 909,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 910,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 912,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 913,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 914,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 915,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 916,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 917,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 918,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 919,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 920,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 925,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 928,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 929,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 930,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 931,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 934,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 936,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 937,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 938,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 940,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 941,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 947,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 949,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 951,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 952,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 954,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 956,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 959,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 970,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 971,
    "Timezone": "PST (UTC-08:00)"
  },
  {
    "AreaCode": 972,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 973,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 978,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 979,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 980,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 984,
    "Timezone": "EST (UTC-05:00)"
  },
  {
    "AreaCode": 985,
    "Timezone": "CST (UTC-06:00)"
  },
  {
    "AreaCode": 986,
    "Timezone": "MST (UTC-07:00)"
  },
  {
    "AreaCode": 989,
    "Timezone": "EST (UTC-05:00)"
  }
 ]