// NHAP DU LIEU
var i = 0;
$(document).ready(function Nhap(){
    //Nút NHập Dữ liệu 
    $("#input").click(function(){
        i++;

        //Khai Bao bien luu du lieu
        var inputName = $("#hoten").val();
        if((inputName == "")){
            alert("Vui lòng điền tên của bạn!");
            return;
        }
        var inputToan = $("#diemtoan").val();
        var inputLy = $("#diemly").val();
        var inputHoa = $("#diemhoa").val();
        var inputAvg = "?";
        if((inputName == "")||(inputToan == "")||(inputLy == "")||(inputHoa == ""))
        {
            alert("Vui lòng điền đầy đủ điểm của bạn!!");
        return;
    }


        //khi nhập xong điểm thì dùng hàm val để biến ô input trống lại như cũ
        $("#hoten").val("");
        $("#diemtoan").val("");
        $("#diemly").val("");
        $("#diemhoa").val("");


        //dùng hàm append để lấy them điểm cho những lần nhập tiếp theo
        $("#table").append(
            "<tr><td>" + i + "</td>"
            +"<td>" +  inputName + "</td>"
            +"<td>" +  inputToan + "</td>"
            +"<td>" +  inputLy + "</td>"
            +"<td>" +  inputHoa + "</td>"
            +"<td>" + inputAvg + "</td></tr>"
        );
    });
  });


  
//function tính điểm trung bình
  $(document).ready(function avg(){
      
      $("#avg").click(function avg(){
          if(i > 1, i++){//đặt điều kiện cho i để row > 1
        $("tr").each(function avg(){
            var diemtoan = $(this).children("td").eq(2).html();// dùng children để gọi đc td trong table
            var diemly = $(this).children("td").eq(3).html();
            var diemhoa = $(this).children("td").eq(4).html();
            var avg = (parseFloat(diemtoan) + parseFloat(diemly) + parseFloat(diemhoa))/3;
            $(this).children("td").eq(5).html(avg.toFixed(1));


          });}
      })
  });



// function tìm kiếm hs giỏi

  $(document).ready(function(){
      
    $("#xlhs").click(function(){

        $("tr").each(function(){
            var xlhs = $(this).find("td").eq(5).html();
            if(xlhs >= 8.0) {
                $(this).find("td").eq(5).addClass("xlhs");
            }


        })
        
});
});
