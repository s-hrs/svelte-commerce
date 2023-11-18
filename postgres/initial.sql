DROP TABLE IF EXISTS product;

CREATE TABLE product
(
  id integer NOT NULL PRIMARY KEY,
	name char(100) NOT NULL,
  created_date_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO product (id, name) VALUES (1, 'T-Shirt');
INSERT INTO product (id, name) VALUES (2, 'Sticker');