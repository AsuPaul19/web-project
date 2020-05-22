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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `posts to users_idx` (`fk_userid`),
  CONSTRAINT `posts to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'test title','test text title title 47097-ueueueieei','images/test1.png','images/thumbnail/test1.png',0,'2020-04-05 22:10:46',8),(2,'test title1','test1 text title title 47097-ueueueieei','images/test1.png','images/thumbnail/test1.png',0,'2020-04-05 22:14:12',1),(3,'test title2','test1 text title title 485858587097-ueueueieei','images/test2.png','images/thumbnail/test2.png',0,'2020-04-05 22:15:09',2),(5,'test title4','test1 text title tmeekjtitle 4858iuyiutt58587097-ueueueieei','images/test4.png','images/thumbnail/test4.png',0,'2020-04-05 22:16:01',4),(7,'test title6','test6 text title tmeekjtitle 4858iuyiutt58587097-ueueueieei','images/test6.png','images/thumbnail/test6.png',0,'2020-04-05 22:18:26',6),(8,'uuu2222','322222','public\\images\\uploads\\5c0ceb795cf4209ad7eb614758bb9b2ba27299918383.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 10:51:49',55),(9,'ggg234','23409','public\\images\\uploads\\d51cb4ea22deb5dd0506ea0daebfdabcbd8849c0ad46.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 16:53:58',55),(10,'ww234','ww123','public\\images\\uploads\\3ea901c8205bff6285faaf60cd4f9770b3cc96bb7e6f.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 20:42:21',55),(11,'ww234','ww123','public\\images\\uploads\\2d98bcaa2fb7959e5ca777a8ab27fea364599f6f602a.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 20:42:22',55),(12,'eee87','ueye33','public\\images\\uploads\\ee998fc8396b681c831b2434ae93abe905d890f97ce8.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 20:43:12',55),(13,'eee87','ueye33','public\\images\\uploads\\2d368f86d89b3228ece42a9112e6d4346d2d5a1bb50e.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 20:43:13',55),(14,'eee87','ueye33','public\\images\\uploads\\26516ffcbe92ec936363ac0c0a4168985df78d418700.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 20:43:14',55),(15,'mmm222','222098','public\\images\\uploads\\493cb9357912ff19ec360c588d61b53b7755528e9720.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 21:12:55',55),(16,'mmm222','222098','public\\images\\uploads\\eefdc135e4fb1abcac4fd6668861a96410869ae24066.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 21:17:59',55),(17,'ja45','980','public\\images\\uploads\\7f255a0c9df68fdec912fb02c943010c1a39d217cb35.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-18 21:28:05',55),(18,'ut231','5698','public\\images\\uploads\\52e5523343b025e12633c19e78fb42e2137321d55a09.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 11:10:19',55),(19,'wel123','123$','public\\images\\uploads\\dd92578ab4138a2cfad3dce4b3f795632bfcd29e62cc.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 11:19:07',55),(20,'kkk345','879','public\\images\\uploads\\2baff6691a4ef803362f902b58d89d319654dec3dcc0.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 11:57:56',55),(21,'poo345','467','public\\images\\uploads\\08202068c98e37bcb744c91fb32b5c16b67b8e9c4a71.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 12:11:30',55),(22,'ui565','908','public\\images\\uploads\\90a96815d48007c9779a523a29085e58bd9179f68b32.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 12:24:33',55),(23,'iuo908','8733','public\\images\\uploads\\1e9bd5c2bac2d2d17322168b10c7506f76b6d5fbc64d.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 12:39:08',55),(24,'axios post','axios','public\\images\\uploads\\745a62ef23d5e93fa735386715d7204d3c9179a75c1b.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 12:50:25',55),(25,'yuyyy','utry','public\\images\\uploads\\37b705eac506ab78b85f2bf598bb0a3a6d9a6b8aa293.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-19 12:58:12',55),(26,'Tv1','1899','public\\images\\uploads\\15f7f07fa58939a9a6ebd5bb41805cd842d018101caf.jpeg','public/images/uploads/thumbnail-uploadImage',0,'2020-05-21 20:55:32',55);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
