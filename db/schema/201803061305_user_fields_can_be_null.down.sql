 ALTER TABLE `Users` 
    DROP FOREIGN KEY `Users_fk0`,
    DROP FOREIGN KEY `Users_fk1`;
ALTER TABLE `Users` 
    MODIFY COLUMN `CountryCode` varchar(20) NOT NULL,
    MODIFY COLUMN `StateCode` varchar(20) NOT NULL,
    MODIFY COLUMN `City` varchar(255) NOT NULL,
    MODIFY COLUMN `PostalCode` varchar(255) NOT NULL,
    MODIFY COLUMN `DistanceUnits` varchar(20) NOT NULL,
    MODIFY COLUMN `Currency` varchar(20) NOT NULL,
    ADD CONSTRAINT `Users_fk0` FOREIGN KEY (`CountryCode`) REFERENCES `Countries`(`Code`),
    ADD CONSTRAINT `Users_fk1` FOREIGN KEY (`StateCode`) REFERENCES `States`(`Code`);