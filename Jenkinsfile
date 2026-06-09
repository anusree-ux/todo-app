pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/anusree-ux/todo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop todo-app || true'
                sh 'docker rm todo-app || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name todo-app todo-app'
            }
        }
    }
}
