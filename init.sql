
CREATE TABLE tutorial
(
    ID SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    publicado boolean NOT NULL DEFAULT true
)