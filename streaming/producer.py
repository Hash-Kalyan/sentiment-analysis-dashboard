
from kafka import KafkaProducer
from textblob import TextBlob
import json
import time

producer = KafkaProducer(bootstrap_servers='localhost:9092', value_serializer=lambda v: json.dumps(v).encode('utf-8'))

sample_data = ["I love this product!", "This is the worst!", "Quite average."]

while True:
    for text in sample_data:
        analysis = TextBlob(text)
        sentiment = {
            'text': text,
            'polarity': analysis.sentiment.polarity,
            'subjectivity': analysis.sentiment.subjectivity,
            'timestamp': time.time()
        }
        producer.send('sentiment', sentiment)
        print("Sent:", sentiment)
        time.sleep(2)
