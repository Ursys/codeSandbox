void setup() {
  //initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  //read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  //print out the value you read:
  float ohmValue = (sensorValue/1023.0)*1000; 
  Serial.println(ohmValue);
  delay(10m);  //delay in between reads for stability
}
