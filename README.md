
## Project Info

https://github.com/user-attachments/assets/7e54035f-df1a-498c-bcc0-2f9e0edf1bc5

# Taskify - Task Management and Collaboration App  

Taskify is a powerful and user-friendly task management and collaboration tool built with **Next.js** and **Appwrite**. It is optimized for performance using the **Bun** package manager and features a modern, responsive UI created with **ShadCN components**.  

## Key Features  
- **Task Management**: Create, update, and organize tasks with ease.  
- **Collaboration**: Assign tasks, track progress, and collaborate with team members.  
- **Real-time Sync**: Powered by Appwrite's real-time database capabilities.  
- **Modern UI**: A clean and responsive interface using ShadCN components.  
- **Performance**: Ultra-fast development and build process using Bun.  

## Tech Stack  

| **Technology**      | **Purpose**                                       |  
|----------------------|---------------------------------------------------|  
| **Next.js**          | Frontend framework for a server-rendered React app. |  
| **Appwrite**         | Backend for authentication, database, and real-time features. |  
| **Bun**              | Fast package manager and runtime, replacing npm/npx. |  
| **ShadCN**           | UI components for a polished, responsive design. |  

## Prerequisites  
- **Node.js** >= 18  
- **Bun** >= 2.4 ([Install Bun](https://bun.sh))  
- **Appwrite** installed and configured (self-hosted or cloud).  
- **Appwrite Project** with API keys and required services set up.  

## Installation and Setup  

### 1. Clone the Repository  
```bash
git clone https://github.com/yourusername/taskify.git  
cd taskify
```
### 2.Install Dependencies Using Bun
```bash
curl -fsSL https://bun.sh/install | bash
bun install
```
### 3.Set Up Environment Variables
```bash
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=http://localhost/v1
APPWRITE_API_KEY=your_api_key
```
### 4.Run the Development Server
```bash
bun run dev
```
### 5.Access the Application
```bash
http://localhost:3000
```
