// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use walkdir::WalkDir;
use std::fs::File;
use std::io::{ BufReader, Read};

fn main() {
    let _ = tauri::Builder::default()
        .setup(|app| {
            let _window = app.get_window("main").unwrap();

            let _ = _window.maximize();
            let mut i = 0;
            for entry in WalkDir::new("src/injections/") {
                i += 1;
                
                if i != 1 {
                    let entry = entry.unwrap();

                    let file = File::open(entry.path()).expect("didn't work");
                    
                    let mut reader = BufReader::new(file);
                    
                    let mut str = String::new();
                    reader.read_to_string(&mut str).expect("cannot read file");
                    let _ = _window.eval(&str);
                }
            }

            Ok(())
        })
        // .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!());
}
