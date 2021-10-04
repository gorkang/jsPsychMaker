# SELECT TABLES
SELECT * FROM db001_cscn.experimental_condition;
SELECT * FROM db001_cscn.user;
SELECT * FROM db001_cscn.user_condition;
SELECT * from user_task;
SELECT * from task;
SELECT * from protocol;

# JOINED SELECTION
SELECT * FROM user 
	LEFT JOIN user_condition USING (id_user)
    LEFT JOIN experimental_condition USING (id_condition);


# DELETE 
SET @PID = 9992; 

delete from experimental_condition where id_protocol=@PID;
delete from user where id_protocol=@PID;
delete from user_condition where id_protocol=@PID;
delete from user_task where id_protocol=@PID;
delete from task where id_protocol=@PID;
delete from protocol where id_protocol=@PID;