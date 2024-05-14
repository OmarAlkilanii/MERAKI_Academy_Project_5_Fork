DROP TABLE role;

CREATE TABLE roles
(
    id SERIAL NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
/*  */
DROP TABLE permission;

CREATE TABLE permissions
(
    id SERIAL NOT NULL,
    permission VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE role_permission;

CREATE TABLE role_permission
(
    id SERIAL NOT NULL,
    role_id INT,
    permission_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id),
    PRIMARY KEY (id)
);

DROP TABLE users;

CREATE TABLE users
(
    id SERIAL NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    userName VARCHAR(255) UNIQUE,
    country VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role_id INT,
    is_deleted SMALLINT DEFAULT 0,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    PRIMARY KEY (id)
);

DROP TABLE Orders;

CREATE TABLE Orders (
    id SERIAL NOT NULL,
    user_id INT,
    product_id INT,
    price INT,
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);


DROP TABLE products;

CREATE TABLE products
(
    id SERIAL NOT NULL,
    image VARCHAR(5000),
    title VARCHAR(255),
    description TEXT,
    price INT,
    category_id INT,
    is_deleted SMALLINT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    PRIMARY KEY (id)
);

DROP TABLE comments;


CREATE TABLE comments
(

    id SERIAL NOT NULL,
    comment TEXT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id),
    commenter_id INT,
    FOREIGN KEY (commenter_id) REFERENCES users(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);

DROP TABLE categories;


CREATE TABLE categories
(
    id SERIAL NOT NULL,
    title VARCHAR(255),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);

DROP TABLE cart;


CREATE TABLE cart
(
    id SERIAL NOT NULL,
    user_id INT,
    product_id INT,
    is_deleted SMALLINT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    PRIMARY KEY (id)
);





