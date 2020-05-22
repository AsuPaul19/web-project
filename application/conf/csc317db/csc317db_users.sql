-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `usertype` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `USERNAME_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'testusers','fake@mail.com','321jdieeieffei190',0,0,'2020-04-05 21:15:30'),(2,'test11','fake11@mail.com','321jdieeieffei190',0,0,'2020-04-05 21:19:47'),(4,'test666','fake12@mail.com','321jdieeieffei190',0,0,'2020-04-05 21:20:14'),(6,'test13','fake13@mail.com','321jdieeieffei1909',0,0,'2020-04-05 21:20:34'),(7,'test14','fake14@mail.com','321jdieeieffei19088',0,0,'2020-04-05 21:20:52'),(8,'test15','fakeA15@mail.com','321jdieeieffei1909988',0,0,'2020-04-05 21:46:02'),(9,'paultest','paulfake@mail.com','leoeiei%iiw43',0,0,'2020-04-19 21:25:07'),(12,'paultest2','paulfake2@mail.com','2leou7654rthieiei%iiw43',0,0,'2020-04-19 21:29:09'),(13,'paulfake3','paulfake3@mail.com','Crutech1',0,0,'2020-04-20 18:00:26'),(15,'paulfake3000','paulfake3000@gmail.com','Crutech3000',0,0,'2020-05-03 00:07:45'),(16,'paulfake3001','paulfake3001@gmail.com','Crutech3001',0,0,'2020-05-03 00:11:44'),(18,'paulfake3002','paulfake3002@gmail.com','Crutech3002',0,0,'2020-05-03 00:14:21'),(19,'paul','paulfake3003@gmail.com','Crutech3003',0,0,'2020-05-03 07:26:04'),(21,'paulf','paulfake3004@gmail.com','Crutech3004',0,0,'2020-05-03 07:32:03'),(22,'paulfake3005','paulfake3005@gmail.com','Crutech1',0,0,'2020-05-03 07:39:21'),(23,'favourfake1','favourfake1@gmail.com','SanLeandro',0,0,'2020-05-03 19:18:56'),(24,'flafa123','favourdfg@gmail.com','02062006',0,0,'2020-05-03 19:20:06'),(25,'fakefavour','fakefavour@mail.com','Fakefavour1',0,0,'2020-05-13 15:16:19'),(26,'Fakefavour2','fakefavour2@mail.com','Fakefavour2',0,0,'2020-05-13 16:50:54'),(27,'hashedT','hashed@mail.com','12345',0,0,'2020-05-13 18:10:15'),(28,'FakeoldT','fakeoldT@mail.com','12345',0,0,'2020-05-13 18:25:52'),(29,'ComT','come@mail.com','12345',0,0,'2020-05-13 18:42:31'),(30,'yeye1','yeye@mail.com','12345',0,0,'2020-05-13 18:46:38'),(31,'hashed11','hashed@hashed.com','12345',0,0,'2020-05-13 19:19:34'),(32,'timer1','time@time.com','12345',0,0,'2020-05-13 19:22:07'),(33,'done1','done@done.com','12345',0,0,'2020-05-13 21:27:47'),(34,'done2','done2@done.com','12345',0,0,'2020-05-13 21:43:02'),(35,'comergon','comer@comer.com','12345',0,0,'2020-05-13 22:23:12'),(36,'comecgo','come@come.com','12345',0,0,'2020-05-13 22:25:28'),(37,'done3','done@donefake.com','12345',0,0,'2020-05-13 22:55:21'),(38,'jkjk','jk@jkmail.com','Crutech1',0,0,'2020-05-14 08:04:42'),(39,'kddT','kdd@kdd.com','12345',0,0,'2020-05-15 09:18:27'),(40,'gffT','gff@gff.com','12345',0,0,'2020-05-15 09:20:16'),(41,'yuyT','yuy@yuy.com','12345',0,0,'2020-05-15 09:22:23'),(42,'t','t@t.com','12345',0,0,'2020-05-15 12:29:23'),(43,'tt','tt@t.com','1234',0,0,'2020-05-15 12:43:48'),(44,'ttt','ttt@t.com','123',0,0,'2020-05-15 12:48:37'),(45,'tty','tty@tty.com','1001',0,0,'2020-05-15 12:50:27'),(46,'uu','uu@uu.com','1000',0,0,'2020-05-15 12:54:43'),(47,'uuu','uuu@uu.com','10000',0,0,'2020-05-15 12:55:26'),(48,'w','w@ww.com','2',0,0,'2020-05-15 13:47:23'),(49,'c','c@cmail.com','3',0,0,'2020-05-16 10:41:50'),(50,'cc','cc@ccmail.com','t',0,0,'2020-05-16 14:14:03'),(51,'oldT','oldT@mail.com','12345',0,0,'2020-05-16 17:17:49'),(52,'ollT','ollT@mail.com','12345',0,0,'2020-05-16 17:42:22'),(53,'orT','orT@mail.com','2345',0,0,'2020-05-16 17:43:43'),(54,'j','j@mail.com','123',0,0,'2020-05-16 17:49:22'),(55,'hash','hash@hashed.com','$2b$10$udGrQTvOAVWmW9FbzYEbfu3gCqvm4/YZEwrt8igZgLLlETes5nFze',0,0,'2020-05-16 21:22:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-21 22:07:44
