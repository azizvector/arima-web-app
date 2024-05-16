/*
 Navicat Premium Data Transfer

 Source Server         : Local_MySQL
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : arima_db

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 16/05/2024 22:25:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for forecast
-- ----------------------------
DROP TABLE IF EXISTS `forecast`;
CREATE TABLE `forecast` (
  `forecast_id` int NOT NULL AUTO_INCREMENT,
  `summary_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `actual` int DEFAULT NULL,
  `prediction` double DEFAULT NULL,
  PRIMARY KEY (`forecast_id`) USING BTREE,
  KEY `summary_id` (`summary_id`),
  CONSTRAINT `forecast_ibfk_1` FOREIGN KEY (`summary_id`) REFERENCES `summary` (`summary_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39767 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of forecast
-- ----------------------------
BEGIN;
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39672, 155, '2023-12-01', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39673, 155, '2023-12-02', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39674, 155, '2023-12-03', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39675, 155, '2023-12-04', 23, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39676, 155, '2023-12-05', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39677, 155, '2023-12-06', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39678, 155, '2023-12-07', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39679, 155, '2023-12-08', 40, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39680, 155, '2023-12-09', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39681, 155, '2023-12-10', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39682, 155, '2023-12-11', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39683, 155, '2023-12-12', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39684, 155, '2023-12-13', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39685, 155, '2023-12-14', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39686, 155, '2023-12-15', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39687, 155, '2023-12-16', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39688, 155, '2023-12-17', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39689, 155, '2023-12-18', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39690, 155, '2023-12-19', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39691, 155, '2023-12-20', 25, 29.05);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39692, 155, '2023-12-21', 35, 28.57);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39693, 155, '2023-12-22', 30, 28.57);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39694, 155, '2023-12-23', 40, 28.54);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39695, 155, '2023-12-24', 25, 28.54);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39696, 155, '2023-12-24', NULL, 31.86);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39697, 155, '2023-12-25', NULL, 26.4);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39698, 155, '2023-12-27', NULL, 31.41);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39699, 155, '2023-12-30', NULL, 27.06);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39700, 155, '2024-01-03', NULL, 30.91);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39701, 155, '2024-01-08', NULL, 27.53);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39702, 155, '2024-01-14', NULL, 30.51);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39703, 155, '2024-01-21', NULL, 27.88);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39704, 156, '2023-12-01', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39705, 156, '2023-12-02', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39706, 156, '2023-12-03', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39707, 156, '2023-12-04', 23, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39708, 156, '2023-12-05', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39709, 156, '2023-12-06', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39710, 156, '2023-12-07', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39711, 156, '2023-12-08', 40, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39712, 156, '2023-12-09', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39713, 156, '2023-12-10', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39714, 156, '2023-12-11', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39715, 156, '2023-12-12', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39716, 156, '2023-12-13', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39717, 156, '2023-12-14', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39718, 156, '2023-12-15', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39719, 156, '2023-12-16', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39720, 156, '2023-12-17', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39721, 156, '2023-12-18', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39722, 156, '2023-12-19', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39723, 156, '2023-12-20', 25, 29.1);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39724, 156, '2023-12-21', 35, 28.5);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39725, 156, '2023-12-22', 30, 28.56);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39726, 156, '2023-12-23', 40, 28.55);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39727, 156, '2023-12-24', 25, 28.56);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39728, 156, '2023-12-24', NULL, 30.5);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39729, 156, '2023-12-25', NULL, 27.95);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39730, 156, '2023-12-27', NULL, 30.14);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39731, 156, '2023-12-30', NULL, 28.26);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39732, 156, '2024-01-03', NULL, 29.87);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39733, 157, '2023-12-01', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39734, 157, '2023-12-02', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39735, 157, '2023-12-03', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39736, 157, '2023-12-04', 23, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39737, 157, '2023-12-05', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39738, 157, '2023-12-06', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39739, 157, '2023-12-07', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39740, 157, '2023-12-08', 40, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39741, 157, '2023-12-09', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39742, 157, '2023-12-10', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39743, 157, '2023-12-11', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39744, 157, '2023-12-12', 35, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39745, 157, '2023-12-13', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39746, 157, '2023-12-14', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39747, 157, '2023-12-15', 20, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39748, 157, '2023-12-16', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39749, 157, '2023-12-17', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39750, 157, '2023-12-18', 25, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39751, 157, '2023-12-19', 30, NULL);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39752, 157, '2023-12-20', 25, 29.1);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39753, 157, '2023-12-21', 35, 28.5);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39754, 157, '2023-12-22', 30, 28.56);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39755, 157, '2023-12-23', 40, 28.55);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39756, 157, '2023-12-24', 25, 28.56);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39757, 157, '2023-12-24', NULL, 30.5);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39758, 157, '2023-12-25', NULL, 27.95);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39759, 157, '2023-12-27', NULL, 30.14);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39760, 157, '2023-12-30', NULL, 28.26);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39761, 157, '2024-01-03', NULL, 29.87);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39762, 157, '2024-01-08', NULL, 28.49);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39763, 157, '2024-01-14', NULL, 29.67);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39764, 157, '2024-01-21', NULL, 28.66);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39765, 157, '2024-01-29', NULL, 29.53);
INSERT INTO `forecast` (`forecast_id`, `summary_id`, `date`, `actual`, `prediction`) VALUES (39766, 157, '2024-02-07', NULL, 28.79);
COMMIT;

-- ----------------------------
-- Table structure for summary
-- ----------------------------
DROP TABLE IF EXISTS `summary`;
CREATE TABLE `summary` (
  `summary_id` int NOT NULL AUTO_INCREMENT,
  `timesteps` int DEFAULT NULL,
  `p` int DEFAULT NULL,
  `d` int DEFAULT NULL,
  `q` int DEFAULT NULL,
  `rmse` double DEFAULT NULL,
  `mape` double DEFAULT NULL,
  `processed_date` datetime DEFAULT NULL,
  `total_order` int DEFAULT NULL,
  PRIMARY KEY (`summary_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of summary
-- ----------------------------
BEGIN;
INSERT INTO `summary` (`summary_id`, `timesteps`, `p`, `d`, `q`, `rmse`, `mape`, `processed_date`, `total_order`) VALUES (155, 8, 2, 1, 2, 6.38, 16.43, '2024-05-08 16:45:50', 24);
INSERT INTO `summary` (`summary_id`, `timesteps`, `p`, `d`, `q`, `rmse`, `mape`, `processed_date`, `total_order`) VALUES (156, 5, 1, 0, 1, 6.39, 16.52, '2024-05-16 22:22:14', 24);
INSERT INTO `summary` (`summary_id`, `timesteps`, `p`, `d`, `q`, `rmse`, `mape`, `processed_date`, `total_order`) VALUES (157, 10, 1, 0, 1, 6.39, 16.52, '2024-05-16 22:24:17', 24);
COMMIT;

-- ----------------------------
-- Table structure for transaction
-- ----------------------------
DROP TABLE IF EXISTS `transaction`;
CREATE TABLE `transaction` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_date` date DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38968414 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of transaction
-- ----------------------------
BEGIN;
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230001, '2023-12-01', 25);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230002, '2023-12-02', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230003, '2023-12-03', 20);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230004, '2023-12-04', 23);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230005, '2023-12-05', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230006, '2023-12-06', 35);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230007, '2023-12-07', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230008, '2023-12-08', 40);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230009, '2023-12-09', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230010, '2023-12-10', 25);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230011, '2023-12-11', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230012, '2023-12-12', 35);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230013, '2023-12-13', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230014, '2023-12-14', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230015, '2023-12-15', 20);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230016, '2023-12-16', 25);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230017, '2023-12-17', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230018, '2023-12-18', 25);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230019, '2023-12-19', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230020, '2023-12-20', 25);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230021, '2023-12-21', 35);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230022, '2023-12-22', 30);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230023, '2023-12-23', 40);
INSERT INTO `transaction` (`order_id`, `order_date`, `quantity`) VALUES (12230024, '2023-12-24', 25);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`user_id`, `name`, `password`, `username`) VALUES (1, 'Admin', 'password', 'admin');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
