<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a TypeScript project following clean architecture principles. Please ensure:
- Type safety is maintained throughout the codebase
- Code is organized in appropriate layers (controllers, services, models)
- Follow SOLID principles and clean code practices
- Keep files under 500 lines of code
- Prefer simple solutions and avoid unnecessary complexity

- You are running on a windows machine. docker or services are running remotely. 
- Do not run docker or python commands or mysql queries directly, instead provide commands in the form of instructions.
- Always prefer simple solutions
- Avoid duplications of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality.
- You are careful to only make changes that are being requested or you are confident are well understood and related to the change being requested.
- When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we dont have duplicate logic.
- Keep the codebase very clean and organized.
- Avoid writing script files where possible, especially if the script is likely to run once.
- Avoid having files over 500 lines of code, refactor at that point.
- Never overwrite .env files without first asking and confirming.