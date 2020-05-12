# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/12
* **Milestone:** 1
* **Kusama Identity:** [<ID>](https://polkascan.io/pre/kusama/account/<ID>)
* **Previously successfully merged evaluation:** None yet

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/emeraldpay/polkaj/blob/master/LICENSE)| - |
| 1. | SS58 encoding |<ul><li>[x] </li></ul>|[SS58](https://github.com/emeraldpay/polkaj/tree/master/polkaj-ss58)| ...| 
| 2.  | SCALE coded |<ul><li>[x] </li></ul>|[SCALE](https://github.com/emeraldpay/polkaj/tree/master/polkaj-scale)| ...| 
| 3. | Base types |<ul><li>[x] </li></ul>|[Base types](https://github.com/emeraldpay/polkaj/tree/master/polkaj-types)| ...| 
| 4. | Unit Tests |<ul><li>[ ] </li></ul>|[Unit Tests](https://codecov.io/gh/emeraldpay/polkaj)| ...| 
| 5. | Documentation |<ul><li>[x] </li></ul>|[Docs](https://github.com/emeraldpay/polkaj/tree/master/docs)| ...| 

## General Notes

### DecimalFormat

The `DecimalFormat` library from Java seems to behave differently depending on your Java version.

First I tried running it with Java 11 as recommended, which gave me 11 errors, all related to formatting.

I won't paste them all here, since the error is of same kind for all, here's the output for one of the tests:

```
DotAmountFormatterSpec > With group separator FAILED
    Condition not satisfied:

    act == "5,123,456,789,000 Planck"
    |   |
    |   false
    |   4 differences (83% similarity)
    |   5(.)123(.)456(.)789(.)000 Planck
    |   5(,)123(,)456(,)789(,)000 Planck
    5.123.456.789.000 Planck
        at io.emeraldpay.pjc.types.DotAmountFormatterSpec.With group separator(DotAmountFormatterSpec.groovy:70)
```


I then switched up to 14, and got 2 _different_ errors - also concerning formatting, but the rather than dot/comma problem,
it is a comma/apostrophe problem:

```
DotAmountFormatterSpec > Converted large with decimal part FAILED
    Condition not satisfied:

    act == "5,123,456,789.00 Point"
    |   |
    |   false
    |   3 differences (86% similarity)
    |   5(’)123(’)456(’)789.00 Point
    |   5(,)123(,)456(,)789.00 Point
    5’123’456’789.00 Point
        at io.emeraldpay.pjc.types.DotAmountFormatterSpec.Converted large with decimal part(DotAmountFormatterSpec.groovy:112)

AddressSpec > Sorted by encoded value in alphanumeric order (random data) STANDARD_OUT
    Base: e62c437c509bb6d8127a5324c36739f54e8c1da30a9e1ea4c24d6872c918577d
```

To verify this, I've prepared a small script:
```java
import java.text.DecimalFormat;
 
public class main {
 
    private static final String TEST = "#,##0.00";
        private static double number = 5.123456789;
 
    public static void main(String[] args) {
 
        DecimalFormat decimalFormat = new DecimalFormat(TEST);
        System.out.println(decimalFormat.format(number));
    }
}
```

Running this on Java 11 (both openjdk & oracle) returns 5,12, whereas for Java 14 returns 5.12

I was using:
```
openjdk version "14.0.1" 2020-04-14
OpenJDK Runtime Environment AdoptOpenJDK (build 14.0.1+7)
```

and 

```
openjdk version "11.0.7" 2020-04-14
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.7+10)

java version "11.0.7" 2020-04-14 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.7+8-LTS)
```
