package com.nhom16.vali.service;

import com.nhom16.vali.entity.Product;
import com.nhom16.vali.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepo repo;

    public void saveOrUpdate(Product product) {
        repo.save(product);
    }

    public Iterable<Product> listAllProducts() {
        return repo.findAll();
    }

    public Product getProductById(String id) {
        return repo.findById(id).orElse(null);
    }
}
