
--- 

CREATE TABLE articles(
    article_id SERIAL PRIMARY KEY,
    article_title TEXT NOT NULL,
    article_summary TEXT NOT NULL,
	article_body TEXT NOT NULL,
    article_view_count INT DEFAULT 0,
    article_publish_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_name TEXT NOT NULL
);

CREATE TABLE category_article_rel(
    category_id INT REFERENCES categories(category_id),
    article_id INT REFERENCES articles(article_id),
    PRIMARY KEY (category_id, article_id)
);



