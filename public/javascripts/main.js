(async function(){

// await ScanditSDK.configure('AvZ072L0RvlIKSgzrRii1w0OHeoICxgiTUDNd10JbYejULEYHX0VqORFAP5iHLfNulogsNJV6n5MR3BupHBaZzVB+vpfdLCX6WizktZr9F9dKL0BpiC2WXoAW82Da5GXJXkXgsp/9nSsU2X5M1pEM/lEyXzlVmAVnEGzvNdORWTcDPoBylHr0iloesVodw1MU2mEzzxaxSSyJDiwfUqku85pT7MuaC3C+HhBI9t5yYqbWHHTBGutkXJpeI2uE8UepXkX2RV1nQmlFq7+hUwSddZXCWyVQf3uPUIXBex3giOIc7vleEQR6DpsEcwacDXs70TO7BhkTioRSHQAYU4NJAt6lhkUM1s26SXpQDFE05d2MItzdAhZIwRml4nqaLOjpwnVTIQTBl1mQ9Rr03jJco1+r2b9edLVFU51R2tQ+z+MRt4qhWim0jtAXeTwRMWYvk0hnM4IdQ7LUnkdjTaYx7RpQaAZZ66e0BboqIVwaI3jNgwFC3pmQfguKvOVYMCTn214JPF+6bxTWMIzq3/NMDUSGF8cHdeQmTyU+GNKD3jyrmetldKUvrq1WCtmasH01MdaWN663eUrGXSZafn4LEFbIKATCKXCWmTkgOM8PDhsT1Sow5d3h0XIIW/6RA8Df7G682uTHq7Wkp1jQNJ4gCkmCJEIVWDHDtJIditX6PPMm+5GeNQtZI2EmFEdEQUNzVhoqWmma+bpPrsoeKEpG/J5CpWRky7cTqq4k+F/D7vKiXDu0CPjnaNtWXrKLi/xJQfcRQvdSidNwaDUDKetFuuYyvONASFJfZdwdplg+uxa6SbjZhKwYIQ+Rr8JtNUG73prwR1hLUUqgp3qhG3Q1eTA+5aojxSfVHeZe1jSVixl5BQEZmkf0FxkU6SCsZuiUvXxG13NlJEYVeZDbk5sICuQD5oV19ZoZ54iLEgenqIKQp2ZsHMS9OTQ+jMslfBYKFmXCQfHNpLcXjwvDZ2o2aw0VxEs+00T0tbEX0movjYJHzFLlz+FALz7hG0fN/+hXEYAvLsDFJLu36PUObRAHKLjzCfZqZZfqkD/sgt6onctfV0bzjoS7XDXY1/ErpcAHeglnY61KbNoZ5eCqKm5AhtmR9l2va6vvkJ73X6lzIVCpxfEneqNDkLeTtAmx6bTbH0rEnCWT+RFH8zimazDSjQqihmSKsmFbvkmvtCA2CE44swNFe65Z0lhqht0r8+7dh1MKTzM');
// ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
//   playSoundOnScan: true,
//   vibrateOnScan: true
// }).then(function(barcodePicker) {
//   console.log(barcodePicker)
// });

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { 
	  fps: 10, 
	  qrbox: 250,
	  aspectRatio: 100/400,
});
html5QrcodeScanner.render(onScanSuccess);


async function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    let reg = decodedText.trim().replace('/','_');
    let res = await fetch(`/students/${reg}`);
    html5QrcodeScanner.clear();
    
    if (res.status == 200){
      let user = await res.json();

      var dialogContent = `
            <div class="text-center mb-3">
              <i class="fas fa-check-circle fa-5x text-success"></i>
            </div>
            <div>
              <p><strong>Registration</strong> ${user.reg}</p>
              <p><strong>Name:</strong> ${user.full_name}</p>
              <p><strong>Course</strong> ${user.course}</p>
              <p><strong>Admission Year</strong> ${user.admission_year}</p>
            </div>
          `;
  
      bootbox.dialog({
        title: "Verification success",
        message: dialogContent,
      })
      
    }else{
      bootbox.dialog("Verification failed")
    }
}


  
})()
function startCameraScan(){
}



let scan = document.getElementById("scan");
if (scan){
  scan.onclick = function(e){
    e.preventDefault();
    startCameraScan();  
  };
  
}


let scan_file = document.getElementById("scan-file");
if (scan_file){
  scan_file.onclick = function(e){
    e.preventDefault();
  };
  
}
