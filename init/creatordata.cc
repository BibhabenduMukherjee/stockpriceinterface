#include <iostream>
#include <fstream>
#include <iomanip>
#include <random>

// Function to generate random double within a range
double random_double(double min, double max) {
    static std::random_device rd;
    static std::mt19937 gen(rd());
    std::uniform_real_distribution<> dis(min, max);
    return dis(gen);
}

// Function to create CSV file with 1000 records
void generateCSV(const std::string& filename) {
    std::ofstream outfile(filename);
    if (!outfile.is_open()) {
        std::cerr << "Error: Unable to open file " << filename << std::endl;
        return;
    }

    // Header
    outfile << "Open,Close,High,Low\n";

    // Generate 1000 records
    for (int i = 0; i < 1000; ++i) {
        double open = random_double(340.0, 350.0);
        double close = random_double(open - 5.0, open + 5.0);
        double high = std::max(open, close) + random_double(0.0, 2.0);
        double low = std::min(open, close) - random_double(0.0, 2.0);

        outfile << std::fixed << std::setprecision(2);
        outfile << open << "," << close << "," << high << "," << low << "\n";
    }

    outfile.close();
    std::cout << "CSV file generated successfully: " << filename << std::endl;
}

int main() {
    generateCSV("data.csv");
    return 0;
}
