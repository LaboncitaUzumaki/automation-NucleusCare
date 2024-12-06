# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Install Playwright
RUN npx playwright install

# Install Playwright dependencies
RUN npx playwright install-deps

# Install Allure Commandline globally
RUN npm install -g allure-commandline --save-dev

# Copy the entire application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application (this can be adjusted based on your testing requirements)
CMD ["npm", "run", "bdd:web:dev"]

# After the tests, generate Allure report
RUN allure generate output --clean -o allure-report

# Copy the Allure report to artifacts directory for external access
RUN mkdir -p /app/artifacts/allure-report && cp -R allure-report/* /app/artifacts/allure-report/

# Install ts-node globally for running TypeScript files
RUN npm install -g ts-node

# Run the Azure upload script after the tests
CMD ["ts-node", "./src/utils/azure/uploadReport.ts"]
