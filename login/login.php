<?php
mysql_connect('127.0.0.1','root','root');
mysql_query('use sz1903');

 $username=$_GET['username'];
 $password=$_GET['password'];

 $sql="select * from users where username='$username' and password='$password'";
 $result=mysql_query($sql);
 $row=mysql_fetch_assoc($result);
echo json_encode($row);

