# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//run using docker 


docker build -t react-app:nginx -f Dockerfile_Production .   

docekr run --reacttt -d -p 8080:80 react-app


https://www.youtube.com/watch?v=gM2cWo1DWIk

# React Application

This is a React application that can be built and run using Docker.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Docker on your machine.

## Building and Running the Application

To build and run the application, follow these steps:

1. **Build the Docker image**:

    Run the following command in your terminal:

    ```bash
    docker build -t react-app:nginx -f Dockerfile_Production .
    ```

    This command builds a Docker image from your Dockerfile and tags it as `react-app:nginx`.

2. **Run the Docker container**:

    After the image is built, you can run it with the following command:

    ```bash
    docker run --name react-app -d -p 8080:80 react-app:nginx
    ```

    This command runs a Docker container from the `react-app:nginx` image, names it `react-app`, and maps port 8080 on your machine to port 80 on the container.

3. **Access the application**:

    Open your web browser and navigate to `http://localhost:8080`. You should see your React application running.

## Contact

If you want to contact me you can reach me at `<your-email@example.com>`.

## License

This project uses the following license: `<license_name>`.