#include <iostream>

template<typename T> void swap(T& x, T& y) {
	T tmp = x;
	x = y;
	y = tmp;
}

int main() {
	int x = 1, y = 0;
	swap<int>(x,y);
	std::cout << x << ' ' << y << std::endl;
}
