
CREATE TABLE articles(
    article_id SERIAL PRIMARY KEY,
    article_title text,
    article_summary text,
	article_body text,
    article_categories text,
    article_view_count BIGINT, -- Pues si creamos una relacion, esta va a escalar linearmente a la relacion lo cual nos deja en donde empezamos
	article_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- SELECT * FROM articles ORDER BY ViewCount DESC LIMIT 10;


CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_tag text
);

CREATE TABLE category_article_rel(
    category_id SERIAL PRIMARY KEY REFERENCES categories(category_id),
    article_id SERIAL REFERENCES articles(article_id)
);








