use warp::Filter;

#[tokio::main]
async fn main() {
    let static_files = warp::path("static").and(warp::fs::dir("./static"));
    let templates = warp::path("templates").and(warp::fs::dir("./templates"));

    let routes = static_files.or(templates).or(warp::fs::file("./templates/index.html"));

    println!("Server running at http://localhost:3030");
    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
