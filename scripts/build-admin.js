import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const adminDir = path.join(rootDir, "admin-dashboard");
const publicAdminDir = path.join(rootDir, "public", "admin");

console.log("=== Building Admin Control Panel ===");
console.log("Admin Source Directory:", adminDir);
console.log("Public Admin Target Directory:", publicAdminDir);

try {
  // Dependencies are installed in the root package.json to ensure reliable deployment on Vercel.
  // We do not run npm install in the subdirectory.

  // 2. Build the admin dashboard
  console.log("Building admin dashboard...");
  execSync("npm run build", { cwd: adminDir, stdio: "inherit" });

  // 3. Ensure target directory exists and is clean
  if (fs.existsSync(publicAdminDir)) {
    console.log("Cleaning existing public/admin folder...");
    fs.rmSync(publicAdminDir, { recursive: true, force: true });
  }
  fs.mkdirSync(publicAdminDir, { recursive: true });

  // 4. Copy build output to public/admin
  const distDir = path.join(adminDir, "dist");
  console.log(`Copying compiled files from ${distDir} to ${publicAdminDir}...`);
  copyFolderSync(distDir, publicAdminDir);
  console.log("=== Admin Dashboard Compiled and Copied Successfully! ===");
} catch (error) {
  console.error("Error building admin dashboard:", error);
  process.exit(1);
}

function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}
