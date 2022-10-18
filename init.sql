-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: nodejs_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `kqsx`
--

DROP TABLE IF EXISTS `kqsx`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kqsx` (
  `name` varchar(15) DEFAULT NULL,
  `ten_giai` varchar(45) DEFAULT NULL,
  `giai8` varchar(15) DEFAULT NULL,
  `giai7_0` varchar(15) DEFAULT NULL,
  `giai7_1` varchar(15) DEFAULT NULL,
  `giai7_2` varchar(15) DEFAULT NULL,
  `giai7_3` varchar(15) DEFAULT NULL,
  `giai6_0` varchar(15) DEFAULT NULL,
  `giai6_1` varchar(15) DEFAULT NULL,
  `giai6_2` varchar(15) DEFAULT NULL,
  `giai5_0` varchar(15) DEFAULT NULL,
  `giai5_1` varchar(15) DEFAULT NULL,
  `giai5_2` varchar(15) DEFAULT NULL,
  `giai5_3` varchar(15) DEFAULT NULL,
  `giai5_4` varchar(15) DEFAULT NULL,
  `giai5_5` varchar(15) DEFAULT NULL,
  `giai4_0` varchar(15) DEFAULT NULL,
  `giai4_1` varchar(15) DEFAULT NULL,
  `giai4_2` varchar(15) DEFAULT NULL,
  `giai4_3` varchar(15) DEFAULT NULL,
  `giai4_4` varchar(15) DEFAULT NULL,
  `giai4_5` varchar(15) DEFAULT NULL,
  `giai4_6` varchar(15) DEFAULT NULL,
  `giai3_0` varchar(15) DEFAULT NULL,
  `giai3_1` varchar(15) DEFAULT NULL,
  `giai3_2` varchar(15) DEFAULT NULL,
  `giai3_3` varchar(15) DEFAULT NULL,
  `giai3_4` varchar(15) DEFAULT NULL,
  `giai3_5` varchar(15) DEFAULT NULL,
  `giai2_0` varchar(15) DEFAULT NULL,
  `giai2_1` varchar(15) DEFAULT NULL,
  `giai1` varchar(15) DEFAULT NULL,
  `giai_db` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kqsx`
--

LOCK TABLES `kqsx` WRITE;
/*!40000 ALTER TABLE `kqsx` DISABLE KEYS */;
INSERT INTO `kqsx` VALUES ('TP',NULL,'12','844',NULL,NULL,NULL,'3675','4272','5628','1063',NULL,NULL,NULL,NULL,NULL,'70472','87141','77875','48163','15812','83344','50090','40391','26169',NULL,NULL,NULL,NULL,'56516',NULL,'69978','532276'),('DT',NULL,'30','474',NULL,NULL,NULL,'5309','1672','7596','3172',NULL,NULL,NULL,NULL,NULL,'63818','31985','80441','60781','29290','65805','80770','94668','45469',NULL,NULL,NULL,NULL,'74161',NULL,'84487','878030'),('CM',NULL,'31','761',NULL,NULL,NULL,'7260','2220','8333','0836',NULL,NULL,NULL,NULL,NULL,'15592','52210','85528','69569','30231','45697','86441','34438','78470',NULL,NULL,NULL,NULL,'01841',NULL,'60147','732514'),('BT',NULL,'62','750',NULL,NULL,NULL,'0291','4903','5530','9896',NULL,NULL,NULL,NULL,NULL,'48067','42955','00070','77038','53258','86896','44818','39222','97126',NULL,NULL,NULL,NULL,'00978',NULL,'86458','107252'),('VT',NULL,'99','437',NULL,NULL,NULL,'7630','3567','4523','0601',NULL,NULL,NULL,NULL,NULL,'81138','96507','65490','85232','96331','01587','20972','73814','73582',NULL,NULL,NULL,NULL,'43796',NULL,'88979','593177'),('BLIEU',NULL,'18','751',NULL,NULL,NULL,'5650','3192','9340','2595',NULL,NULL,NULL,NULL,NULL,'94963','96016','50573','82995','12637','75994','37989','58049','02058',NULL,NULL,NULL,NULL,'98890',NULL,'63843','682520'),('ST',NULL,'07','969',NULL,NULL,NULL,'4704','5221','1441','1238',NULL,NULL,NULL,NULL,NULL,'84068','84776','60413','81765','07549','02395','13601','96038','06913',NULL,NULL,NULL,NULL,'61836',NULL,'10242','779205'),('TN',NULL,'07','007',NULL,NULL,NULL,'2158','5495','2232','4751',NULL,NULL,NULL,NULL,NULL,'51716','95989','46024','34403','29589','93403','28145','67813','70411',NULL,NULL,NULL,NULL,'15987',NULL,'27129','054027'),('AG',NULL,'18','964',NULL,NULL,NULL,'5174','7589','8763','3714',NULL,NULL,NULL,NULL,NULL,'91754','42127','49861','50726','55158','28561','52470','70064','79340',NULL,NULL,NULL,NULL,'41713',NULL,'46324','750091'),('BTH',NULL,'49','920',NULL,NULL,NULL,'4879','8726','8275','8453',NULL,NULL,NULL,NULL,NULL,'33053','46265','14345','89543','55509','13309','10344','80783','36447',NULL,NULL,NULL,NULL,'88137',NULL,'65721','642100'),('VL',NULL,'75','170',NULL,NULL,NULL,'6081','8316','8958','6311',NULL,NULL,NULL,NULL,NULL,'98951','23245','59553','57204','24804','00545','74749','62707','32348',NULL,NULL,NULL,NULL,'25998',NULL,'32093','972422'),('SBE',NULL,'39','494',NULL,NULL,NULL,'5868','9626','9918','0955',NULL,NULL,NULL,NULL,NULL,'32739','58734','88188','23417','22104','42420','92822','54930','90929',NULL,NULL,NULL,NULL,'66295',NULL,'02950','223670'),('TV',NULL,'59','754',NULL,NULL,NULL,'5208','5357','6916','2309',NULL,NULL,NULL,NULL,NULL,'23983','21905','07005','87253','12579','90505','43707','78804','45139',NULL,NULL,NULL,NULL,'53590',NULL,'11292','536301'),('LA',NULL,'93','225',NULL,NULL,NULL,'7920','8158','0490','7706',NULL,NULL,NULL,NULL,NULL,'71014','54597','10035','17076','22250','92804','85137','80588','45352',NULL,NULL,NULL,NULL,'31577',NULL,'75717','599617'),('BP',NULL,'22','076',NULL,NULL,NULL,'0099','1602','2507','1401',NULL,NULL,NULL,NULL,NULL,'87761','94085','51633','19575','11277','41777','52188','03860','03159',NULL,NULL,NULL,NULL,'72723',NULL,'20773','002556'),('HG',NULL,'94','548',NULL,NULL,NULL,'9346','4758','3569','2826',NULL,NULL,NULL,NULL,NULL,'17298','59408','42871','52416','07265','62323','52425','29955','27944',NULL,NULL,NULL,NULL,'70157',NULL,'89705','284647'),('TG',NULL,'30','710',NULL,NULL,NULL,'0628','9063','7454','4869',NULL,NULL,NULL,NULL,NULL,'22171','78103','80943','60944','06735','11089','95501','97232','67593',NULL,NULL,NULL,NULL,'62824',NULL,'68548','846729'),('KG',NULL,'89','183',NULL,NULL,NULL,'8513','2172','0648','4146',NULL,NULL,NULL,NULL,NULL,'37749','56158','78405','73852','40584','61313','50578','92282','14953',NULL,NULL,NULL,NULL,'68253',NULL,'06875','993169'),('DL',NULL,'48','398',NULL,NULL,NULL,'3824','5460','8094','4818',NULL,NULL,NULL,NULL,NULL,'31727','54584','43572','91439','19434','89857','81536','64698','79500',NULL,NULL,NULL,NULL,'20575',NULL,'71890','317311'),('mb_t2',NULL,NULL,'710','undefined','undefined','undefined','0628','9063','7454','4869','undefined','undefined','undefined','undefined','undefined','22171','78103','80943','60944',NULL,NULL,NULL,'97232','67593','undefined','undefined','undefined','undefined','62824','undefined','68548','846729'),('mb_t3',NULL,NULL,'750','undefined','undefined','undefined','0291','4903','5530','9896','undefined','undefined','undefined','undefined','undefined','48067','42955','00070','77038',NULL,NULL,NULL,'39222','97126','undefined','undefined','undefined','undefined','00978','undefined','86458','107252'),('mb_t4',NULL,NULL,'750','undefined','undefined','undefined','0291','4903','5530','9896','undefined','undefined','undefined','undefined','undefined','48067','42955','00070','77038',NULL,NULL,NULL,'39222','97126','undefined','undefined','undefined','undefined','00978','undefined','86458','107252'),('mb_t5',NULL,NULL,'750','undefined','undefined','undefined','0291','4903','5530','9896','undefined','undefined','undefined','undefined','undefined','48067','42955','00070','77038',NULL,NULL,NULL,'39222','97126','undefined','undefined','undefined','undefined','00978','undefined','86458','107252'),('mb_t6',NULL,NULL,'844','undefined','undefined','undefined','3675','4272','5628','1063','undefined','undefined','undefined','undefined','undefined','70472','87141','77875','48163',NULL,NULL,NULL,'40391','26169','undefined','undefined','undefined','undefined','56516','undefined','69978','532276'),('mb_t7',NULL,NULL,'710','undefined','undefined','undefined','0628','9063','7454','4869','undefined','undefined','undefined','undefined','undefined','22171','78103','80943','60944',NULL,NULL,NULL,'97232','67593','undefined','undefined','undefined','undefined','62824','undefined','68548','846729'),('mb_cn',NULL,NULL,'710','undefined','undefined','undefined','0628','9063','7454','4869','undefined','undefined','undefined','undefined','undefined','22171','78103','80943','60944',NULL,NULL,NULL,'97232','67593','undefined','undefined','undefined','undefined','62824','undefined','68548','846729');
/*!40000 ALTER TABLE `kqsx` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `2d_dau` double DEFAULT NULL,
  `2d_duoi` double DEFAULT NULL,
  `2d_7lo` double DEFAULT NULL,
  `2d_18lo` double DEFAULT NULL,
  `2d_27lo` double DEFAULT NULL,
  `3d_dau` double DEFAULT NULL,
  `3d_duoi` double DEFAULT NULL,
  `3d_7lo` double DEFAULT NULL,
  `3d_17lo` double DEFAULT NULL,
  `4d_duoi` double DEFAULT NULL,
  `4d_16lo` double DEFAULT NULL,
  `4d_20lo` double DEFAULT NULL,
  `da_thang` double DEFAULT NULL,
  `da_xien` double DEFAULT NULL,
  `2d_dau_trung` double DEFAULT NULL,
  `2d_duoi_trung` double DEFAULT NULL,
  `2d_7lo_trung` double DEFAULT NULL,
  `2d_18lo_trung` double DEFAULT NULL,
  `2d_27lo_trung` double DEFAULT NULL,
  `3d_dau_trung` double DEFAULT NULL,
  `3d_duo_trung` double DEFAULT NULL,
  `3d_7lo_trung` double DEFAULT NULL,
  `3d_17lo_trung` double DEFAULT NULL,
  `4d_duoi_trung` double DEFAULT NULL,
  `4d_16lo_trung` double DEFAULT NULL,
  `4d_20lo_trung` double DEFAULT NULL,
  `da_thang_trung` double DEFAULT NULL,
  `da_xien_trung` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rabbithole','2323123','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-18 15:54:24
