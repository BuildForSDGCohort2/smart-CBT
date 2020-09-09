const pool = require('./db-pool');

module.exports = () => {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query(`CREATE TABLE IF NOT EXISTS exams(
            id INT NOT NULL AUTO_INCREMENT,
            date DATETIME DEFAULT CURRENT_TIMESTAMP(),
            tutor VARCHAR(255),
            courseTitle VARCHAR(255) NOT NULL UNIQUE,
            creditLoad INT,
            courseCode VARCHAR(255),
            examDuration INT,
            examInstructions JSON,
            examType ENUM('objective', 'theory') NOT NULL,
            PRIMARY KEY(id)
        )`, (err, result) => {
            if(err) console.log(err);
            else console.log('Exams table created')
        });
        connection.release();
    });
}