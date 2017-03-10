-- Schema to create tables if not already created

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  description TEXT,
  duration INTEGER,
  longTitle TEXT,
  name TEXT,
  networks TEXT,
  publishDate VARCHAR(100),
  slug TEXT,
  state VARCHAR(100),
  url TEXT,
  tags TEXT,
  thumbnails TEXT 
);

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  articleType VARCHAR(100),
  headline TEXT,
  networks TEXT,
  publishDate VARCHAR(100),
  slug TEXT,
  state VARCHAR(100),
  subheadline TEXT,
  tags TEXT,
  thumbnails TEXT
);
