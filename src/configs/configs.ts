import { registerAs } from "@nestjs/config";

export default registerAs('configs', () => ({
    app: {
        port: process.env.PORT
    },
    octokit: {
        GITHUB_TOKEN: process.env.GITHUB_TOKEN,
        username: process.env.USERNAME,
        repo: process.env.REPO
    }
}));
