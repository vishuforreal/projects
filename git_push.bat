@echo off
echo --------------------------------------------
echo 🔼 Starting Git Push Process...
echo --------------------------------------------

:: Move to the folder where this file is saved
cd /d "%~dp0"

:: Add all files to git
git add .

:: Commit with a message showing date and time
git commit -m "Auto Commit - %date% %time%"

:: Push to your GitHub main branch
git push origin main

echo --------------------------------------------
echo ✅ Push Completed Successfully!
echo --------------------------------------------
pause
