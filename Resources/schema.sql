-- schema for mobility_db database

CREATE TABLE "mobility_tbl" (
	"index"	INTEGER UNIQUE,
	"date"	TEXT,
	"province"	TEXT,
	"retail_and_recreation"	NUMERIC,
	"grocery_and_pharmacy"	NUMERIC,
	"parks"	NUMERIC,
	"transit_stations"	NUMERIC,
	"workplaces"	NUMERIC,
	"residential"	NUMERIC,
	"TotalCases"	INTEGER,
	"DailyTotals"	INTEGER,
	"TotalDeaths"	INTEGER,
	"DailyDeaths"	INTEGER,
	"TotalRecovered"	INTEGER,
	"DailyRecovered"	INTEGER,
	"population"	INTEGER,
	PRIMARY KEY("index")
);