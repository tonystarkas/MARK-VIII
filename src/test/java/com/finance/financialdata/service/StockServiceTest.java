package com.finance.financialdata.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonWriter;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.Interval;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.SQLOutput;
import java.util.Calendar;

@SpringBootTest
class StockServiceTest {

    @Test
    void test() throws IOException, InterruptedException, ParseException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://query1.finance.yahoo.com/v8/finance/chart/NIO?period1=1648188000&period2=1648274400&interval=1h"))
                .header("x-api-key", "nRh8GRGQQi9t7ks8jHqKh9TvdI10sQ7T4RRCCkPO")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
                .send(request, HttpResponse.BodyHandlers.ofString());

        JsonParser parser = new JsonParser();
        JsonObject json = parser.parse(response.body()).getAsJsonObject();

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String prettyJson = gson.toJson(json);
        System.out.println(prettyJson);
    }
    @Test
    void test2() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yfapi.net/v1/finance/trending/AU"))
                .header("x-api-key", "nRh8GRGQQi9t7ks8jHqKh9TvdI10sQ7T4RRCCkPO")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
                .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
    @Test
    void test3() throws IOException, InterruptedException, ParseException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yfapi.net/v8/finance/spark?interval=1d&range=1d&symbols=NIO"))
                .header("x-api-key", "nRh8GRGQQi9t7ks8jHqKh9TvdI10sQ7T4RRCCkPO")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
                .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
    @Test
    void test4() throws IOException, InterruptedException, ParseException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=NIO"))
                .header("x-api-key", "nRh8GRGQQi9t7ks8jHqKh9TvdI10sQ7T4RRCCkPO")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
                .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
    @Test
    void test5() throws IOException {

        Calendar from = Calendar.getInstance();
        Calendar to = Calendar.getInstance();
        from.add(Calendar.DAY_OF_MONTH, -1);
        Stock google = YahooFinance.get("NIO", from, to, Interval.DAILY);
        System.out.println(google);
    }

}