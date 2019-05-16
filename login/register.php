 <?php
mysql_connect('127.0.0.1','root','root');
mysql_query('use sz1903');

 $username=$_GET['username'];
 $password=$_GET['password'];

 $sql="select * from users where username='$username' and password='$password'";
 $result=mysql_query($sql);
 $row=mysql_fetch_assoc($result);
 if($row>0){
    echo json_encode($row);
 }else{
    $sql1="insert into users(username,password) values('$username','$password')";
    mysql_query($sql1);
    $row=mysql_affected_rows();
    echo json_encode($row); 
 }

