const eslintCheck = 'eslint --ext .ts,.tsx --quiet'

const config = {
    /** Use separate line per file extension to run in parallel */
    '*.ts': eslintCheck,
    '*.tsx': eslintCheck,
}

module.exports = config
