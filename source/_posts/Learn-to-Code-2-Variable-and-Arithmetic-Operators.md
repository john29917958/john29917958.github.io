title: 'Learn to Code 2: Variable and Arithmetic Operators'
visible: false
date: 2022-07-18 23:39:56
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

Primitive data types
- int
- double
- string
- boolean
Operators
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators

Special topic: Shortcut keys

Condition
- if
- else
- else if

How to write a story to include all these concepts...
Remember to write outline
Remember to teach how to install and use XAMPP
1. Install XAMPP
2. Install PHP Debug
3. Open C:\xampp\htdocs\index.php, type <?php phpinfo(); ?>
4. Launch http://localhost/
5. Copy all then go to https://xdebug.org/wizard and paste it
6. Click "Analyse my phpinfo() output
7. Follow instructions to place and rename the DLL to php_xdebug.dll at C:\xampp\php\ext
8. Add settings below to php.ini
    zend_extension = xdebug
    [XDebug]
    xdebug.remote_enable = 1
    xdebug.remote_autostart = 1
9. Add below configurations to user settings
    "php.validate.executablePath": "C:\\xampp\\php\\php.exe",
    "php.debug.executablePath": "C:\\xampp\\php"
10.  Create a launch.json