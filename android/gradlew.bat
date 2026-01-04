@echo off
setlocal

rem --- Impostazioni di base ---
set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

rem --- Rimuoviamo le virgolette dai parametri JVM ---
set DEFAULT_JVM_OPTS=-Xmx1024m -Xms64m

rem --- Percorso del wrapper Gradle ---
set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar

rem --- Comando Java ---
if defined JAVA_HOME (
    set JAVACMD=%JAVA_HOME%\bin\java.exe
) else (
    set JAVACMD=java
)

rem --- Esecuzione del wrapper ---
"%JAVACMD%" %DEFAULT_JVM_OPTS% -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

endlocal
