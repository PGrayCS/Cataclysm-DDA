#pragma once
#ifndef CATA_SRC_MEMORY_FAST_H
#define CATA_SRC_MEMORY_FAST_H

#include <memory>

#if defined(__clang__)
#define CATA_COMPILER_GCC_AT_LEAST(x, y) 0
#elif defined(__GNUC__)
#define CATA_COMPILER_GCC_AT_LEAST(x, y) (__GNUC__ > (x) || (__GNUC__ == (x) && __GNUC_MINOR__ >= (y)))
#else
#define CATA_COMPILER_GCC_AT_LEAST(x, y) 0
#endif

#if defined(__GLIBCXX__) && !CATA_COMPILER_GCC_AT_LEAST(16, 0)
template<typename T> using shared_ptr_fast = std::__shared_ptr<T, __gnu_cxx::_S_single>;
template<typename T> using weak_ptr_fast = std::__weak_ptr<T, __gnu_cxx::_S_single>;
template<typename T, typename... Args> shared_ptr_fast<T> make_shared_fast(
    Args &&... args )
{
    return std::__make_shared<T, __gnu_cxx::_S_single>( args... );
}
#else
template<typename T> using shared_ptr_fast = std::shared_ptr<T>;
template<typename T> using weak_ptr_fast = std::weak_ptr<T>;
template<typename T, typename... Args> shared_ptr_fast<T> make_shared_fast(
    Args &&... args )
{
    return std::make_shared<T>( args... );
}
#endif

#endif // CATA_SRC_MEMORY_FAST_H
