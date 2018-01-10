CREATE TABLE Months (
	Month VARCHAR(255)
    Days VARCHAR(255)
)

INSERT INTO Months
VALUES
	('Jan', day(last_day(concat(year(curdate()), '-01-01'))))
    ('Feb', day(last_day(concat(year(curdate()), '-02-01'))))
    ('Mar', day(last_day(concat(year(curdate()), '-03-01'))))
    ('Apr', day(last_day(concat(year(curdate()), '-04-01'))))
    ('May', day(last_day(concat(year(curdate()), '-05-01'))))
    ('Jun', day(last_day(concat(year(curdate()), '-06-01'))))
    ('Jul', day(last_day(concat(year(curdate()), '-07-01'))))
    ('Aug', day(last_day(concat(year(curdate()), '-08-01'))))
    ('Sep', day(last_day(concat(year(curdate()), '-09-01'))))
    ('Oct', day(last_day(concat(year(curdate()), '-10-01'))))
    ('Nov', day(last_day(concat(year(curdate()), '-11-01'))))
	('Dec', day(last_day(concat(year(curdate()), '-12-01'))))

SELECT * FROM Months
