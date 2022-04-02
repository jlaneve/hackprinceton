from fastapi import FastAPI, Body
from json import loads
from app import summarize_text, remove_text_bias

app = FastAPI()

@app.get("/")
async def ping():
    return "pong"

@app.post("/summarize-bias")
async def summarize_bias(text: str = Body(...)):
    return summarize_text.summarize_text(text)

@app.post("/remove-bias")
async def remove_bias(text: str = Body(...)):
    return remove_text_bias.remove_bias(text)