pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f todo-app || true'
                sh 'docker run -d -p 3000:3000 --name todo-app todo-app'
            }
        }
    }
}
