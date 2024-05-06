#include <Arduino_JSON.h>

const int led1 = 13;
const int led2 = 12;

const int button1 = 2;
const int button2 = 3;

int button1State = 0;
int button2State = 0;

int val = 0;

JSONVar sensorData;

void setup() {
  Serial.begin(38400);

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(button1, INPUT);
}

void loop() {
  button1State = digitalRead(button1);
  button2State = digitalRead(button2);

  if (button1State == HIGH) {
    digitalWrite(led1, HIGH);
    sensorData["b1"] = (int) (1);
    Serial.println(sensorData);
    delay(1000);
    
    digitalWrite(led1, LOW);
    sensorData["b1"] = (int) (0);
    Serial.println(sensorData);
    delay(1000);
  }

  if (button2State == HIGH) {
    digitalWrite(led2, HIGH);
    sensorData["b2"] = (int) (1);
    Serial.println(sensorData);
    delay(1000);
    
    digitalWrite(led2, LOW);
    sensorData["b2"] = (int) (0);
    Serial.println(sensorData);
    delay(1000);
  }
}