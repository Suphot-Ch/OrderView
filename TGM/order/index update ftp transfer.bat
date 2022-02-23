@echo off
cls

set mypath=%~dp0
set myfile=index.html

set ftppath=/TGM/order
set ftphost=www.primusthai.com 77
set username=rdprimus
set userpass=P@ssw0rd

echo open %ftphost% > ftpcmd.dat
echo user %username%>> ftpcmd.dat
echo %userpass%>> ftpcmd.dat
echo cd %ftppath%>> ftpcmd.dat
echo send %mypath%%myfile%>> ftpcmd.dat
echo quit>> ftpcmd.dat

ftp -n -s:ftpcmd.dat
pause

echo bin>> ftpcmd.dat
P@ssw0rd