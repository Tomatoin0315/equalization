package com.ktz.equalization.qa.model;

import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@lombok.Data
@NoArgsConstructor
@NodeEntity
public class bm {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    public bm(long id, String name){
        this.id=id;
        this.name=name;
    }
}
