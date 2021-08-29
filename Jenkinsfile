pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh 'rm -rf *.tar.gz'
                echo 'done cleaning'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'done building'
            }
        }

          stage('Compress') {
            steps {
                sh 'tar czf node_with_jenkins-$BUILD_NUMBER.tar.gz node_modules src index.js package.json server.js'
                echo 'done compressing'
            }
        }
        stage('Extract') {
            steps {
                sh 'tar -xf node_with_jenkins-$BUILD_NUMBER.tar.gz --directory /var/www/html/'
                echo 'done extracting'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}